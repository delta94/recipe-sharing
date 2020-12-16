import Router from 'next/router'
import { getSession } from 'next-auth/client'

function isBrowser() {
  return typeof window !== 'undefined'
}

export default function withAuthentication({ WrappedComponent, location = '/' }: {WrappedComponent?: any, location?: string, [name: string]: any}) {
  const withAuthenticationWrapper = (props) => <WrappedComponent {...props} />

  withAuthenticationWrapper.getInitialProps = async (ctx) => {
    const session = await getSession(ctx.req)
    if (!isBrowser() && ctx.res) {
      if (!session?.user?.name) {
        ctx.res.writeHead(302, { Location: location })
        ctx.res.end()
      }
    } else if (isBrowser && !session?.user?.name) {
      Router.push(location)
    }

    const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx))

    return { ...componentProps, session }
  }

  return withAuthenticationWrapper
}
