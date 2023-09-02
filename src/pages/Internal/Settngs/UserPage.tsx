import Title from '@components/utils/Title'
import Breadcrumbs from '@components/Breadcrumbs'
import { Grid, GridItem } from '@components/Grid'
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon'

function UserPage () {
  return (
    <>
    <Breadcrumbs />
    <Title title="User"/>
    <h1>User</h1>

    <Grid>
      <GridItem cols={2} sm={12} xl={2} className='hidden sm:block'></GridItem>
      <GridItem cols={8} sm={12} xl={8} withBg>
        <div>
          <h3>Edit User</h3>
            <Grid>
              <GridItem cols={3} sm={6}><div className='light'>Account</div></GridItem>
              <GridItem cols={9} sm={6}>
                <input type="text" placeholder='Account' value={'john_doe'}/>
              </GridItem>
            </Grid>

            <Grid>
              <GridItem cols={3} sm={6}><div className='light'>First Name</div></GridItem>
              <GridItem cols={9} sm={6}>
                <input type="text" placeholder='First Name' value={'John'}/>
              </GridItem>
            </Grid>

            <Grid>
              <GridItem cols={3} sm={6}><div className='light'>Last Name</div></GridItem>
              <GridItem cols={9} sm={6}>
                <input type="text" placeholder='Last Name' value={'Doe'}/>
              </GridItem>
            </Grid>

            <Grid>
              <GridItem cols={3} sm={6}><div className='light'>Email</div></GridItem>
              <GridItem cols={9} sm={6}>
                <input type="text" placeholder='Email' value={'sales@aetina.com'}/>
              </GridItem>
            </Grid>

            <Grid>
              <GridItem cols={3} sm={6}><div className='light'>Description</div></GridItem>
              <GridItem cols={9} sm={6}>
                <textarea placeholder='Enter your description here...'>
                  This is a sample user description.
                </textarea>
              </GridItem>
            </Grid>

            <Grid>
              <GridItem cols={3} sm={6}><div className='light'>Super admin</div></GridItem>
              <GridItem cols={9} sm={6}>
                <label className="toggle">
                  <input type="checkbox" />
                  <div className="toggle-bg"></div>
                  <span className="toggle-title">Set as a super admin</span>
                </label>
              </GridItem>
            </Grid>

            <Grid>
            <GridItem cols={3} sm={6}><div className='light'>Group</div></GridItem>
            <GridItem cols={9} sm={6}>
              <div className='badge pr-2'>General <XCircleIcon className='ml-2 cursor-pointer'/></div>
              <div className='badge pr-2'>Group 1 <XCircleIcon className='ml-2 cursor-pointer'/></div>
              <div className='badge pr-2'>Group 2 <XCircleIcon className='ml-2 cursor-pointer'/></div>
              <div className='badge pr-2'>Group 3 <XCircleIcon className='ml-2 cursor-pointer'/></div>
            </GridItem>
            </Grid>

            <Grid>
            <GridItem cols={12} className='text-center mt-6'>
              <div className='flex gap-2 justify-center'>
                <button type='button' className='btn-primary'>Save</button>
                <button type='button' className='btn-default'>Cancel</button>
              </div>
            </GridItem>
            </Grid>
        </div>
      </GridItem>
    </Grid>
    </>
  )
}

export default UserPage
