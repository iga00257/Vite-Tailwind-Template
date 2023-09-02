import Title from '@components/utils/Title'
import Breadcrumbs from '@components/Breadcrumbs'
import { Grid, GridItem } from '@components/Grid'

function BlankPage () {
  return (
    <>
    <Breadcrumbs />
    <Title title="Blank"/>
    <h1>Blank</h1>

    <Grid>
      <GridItem withBg>
          <div>This is an example page with no content. You can use it as a starter for your custom pages.</div>
      </GridItem>
      <GridItem cols={6} withBg>
          <div>This is an example page with no content. You can use it as a starter for your custom pages.</div>
      </GridItem>
      <GridItem cols={6} withBg>
          <div>This is an example page with no content. You can use it as a starter for your custom pages.</div>
      </GridItem>
    </Grid>
    </>
  )
}

export default BlankPage
