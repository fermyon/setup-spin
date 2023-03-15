import * as core from '@actions/core'
import * as actions from './actions'

async function run(): Promise<void> {
  try {
    await actions.build()
    const metadata = await actions.deploy()
    core.setOutput("app-url", metadata.base)
    core.info(`your app is deployed and available at ${metadata.base}`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
