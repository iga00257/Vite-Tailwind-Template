import { type SetStateAction, useState } from 'react'
import Title from '@components/utils/Title'
import Breadcrumbs from '@components/Breadcrumbs'
import { Grid, GridItem } from '@components/Grid'
import user from '../../../assets/user.png'
import ArrowUpTrayIcon from '@heroicons/react/24/solid/ArrowUpTrayIcon'
import TrashIcon from '@heroicons/react/24/solid/TrashIcon'
import ShieldCheckIcon from '@heroicons/react/24/solid/ShieldCheckIcon'
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon'
import { Link } from 'react-router-dom'

const AdminIcon = () => { return <div className='tooltip tooltip-bottom' data-tip='Super Admin'><ShieldCheckIcon className='w-5 h-5 text-primaryColor inline-block' /></div> }

function ProfilePage () {
  const [activeTab, setActiveTab] = useState(1)
  const handleTabClick = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex)
  }

  return (
    <>
    <Breadcrumbs />
    <Title title="Profile"/>
    <h1>Profile</h1>

    <Grid>
      <GridItem cols={4} className='text-center' withBg>
        <div className="flex items-center justify-center text-sm py-4" >
          <div className='w-32 h-32 rounded-full border-4 border-gray-200 bg-gray-200 bg-cover bg-center' style={{ backgroundImage: `url(${user})` }}></div>
        </div>
        <h2 className='mb-0'>John Doe <AdminIcon/></h2>
        <p className='light break-all'>sales@aetina.com</p>
      </GridItem>
      <GridItem cols={8} withBg>
        <div className="tabs mb-4">
          <div
            className={`tab tab-bordered ${activeTab === 1 ? 'tab-active' : ''}`}
            onClick={() => { handleTabClick(1) }}
          >
            Overview
          </div>
          <div
            className={`tab tab-bordered ${activeTab === 2 ? 'tab-active' : ''}`}
            onClick={() => { handleTabClick(2) }}
          >
            Edit Profile
          </div>
          <div
            className={`tab tab-bordered ${activeTab === 3 ? 'tab-active' : ''}`}
            onClick={() => { handleTabClick(3) }}
          >
            Change Password
          </div>
        </div>
        <div id="tab_1" className={`${activeTab === 1 ? '' : 'hidden'}`}>
          <h3>About</h3>
          <p>This is a sample user description.</p>
          <h3>Profile Details</h3>
          <Grid><GridItem cols={3} sm={6} className='mb-[0]'><div className='light'>Account</div></GridItem>
          <GridItem cols={9} sm={6} className='break-all'>john_doe</GridItem></Grid>

          <Grid><GridItem cols={3} sm={6} className='mb-[0]'><div className='light'>First Name</div></GridItem>
          <GridItem cols={9} sm={6} className='break-all'>John</GridItem></Grid>

          <Grid><GridItem cols={3} sm={6} className='mb-[0]'><div className='light'>Last Name</div></GridItem>
          <GridItem cols={9} sm={6} className='break-all'>Doe</GridItem></Grid>

          <Grid><GridItem cols={3} sm={6} className='mb-[0]'><div className='light'>Email</div></GridItem>
          <GridItem cols={9} sm={6} className='break-all'>sales@aetina.com</GridItem></Grid>

          <Grid><GridItem cols={3} sm={6} className='mb-[0]'><div className='light'>Group</div></GridItem>
          <GridItem cols={9} sm={6}>
            <div className='badge'>General</div>
            <div className='badge'>Group 1</div>
            <div className='badge'>Group 2</div>
            <div className='badge'>Group 3</div>
          </GridItem>
          </Grid>
        </div>
        <div id="tab_2" className={`${activeTab === 2 ? '' : 'hidden'}`}>
          <h3>Edit Profile</h3>
            <Grid>
              <GridItem cols={3} sm={6} className='mb-[0]'><div className='light'>Profile Image</div></GridItem>
              <GridItem cols={9} sm={6}>
              <div className="flex items-center justify-center text-sm py-4" >
                <Link to={user} target='_blank'><div className='w-32 h-32 rounded border border-gray-200 shadow bg-gray-200 bg-cover bg-center' style={{ backgroundImage: `url(${user})` }}></div></Link>
              </div>
              <div className='flex flex-row gap-2 justify-center'>
                <button type='button' className='btn-primary p-2'><ArrowUpTrayIcon className='w-4 h-4'/></button>
                <button type='button' className='btn-danger p-2'><TrashIcon className='w-4 h-4'/></button>
              </div>
              </GridItem>
            </Grid>

            <Grid>
              <GridItem cols={3} sm={6} className='mb-[0]'><div className='light'>Account</div></GridItem>
              <GridItem cols={9} sm={6}>
                <input type="text" placeholder='Account' value={'john_doe'}/>
              </GridItem>
            </Grid>

            <Grid>
              <GridItem cols={3} sm={6} className='mb-[0]'><div className='light'>First Name</div></GridItem>
              <GridItem cols={9} sm={6}>
                <input type="text" placeholder='First Name' value={'John'}/>
              </GridItem>
            </Grid>

            <Grid>
              <GridItem cols={3} sm={6} className='mb-[0]'><div className='light'>Last Name</div></GridItem>
              <GridItem cols={9} sm={6}>
                <input type="text" placeholder='Last Name' value={'JDoe'}/>
              </GridItem>
            </Grid>

            <Grid>
              <GridItem cols={3} sm={6} className='mb-[0]'><div className='light'>Email</div></GridItem>
              <GridItem cols={9} sm={6}>
                <input type="text" placeholder='Email' value={'sales@aetina.com'}/>
              </GridItem>
            </Grid>

            <Grid>
              <GridItem cols={3} sm={6} className='mb-[0]'><div className='light'>Description</div></GridItem>
              <GridItem cols={9} sm={6}>
                <textarea placeholder='Enter your description here...'>
                  This is a sample user description.
                </textarea>
              </GridItem>
            </Grid>

            <Grid>
              <GridItem cols={3} sm={6} className='mb-[0]'><div className='light'>Super admin</div></GridItem>
              <GridItem cols={9} sm={6}>
                <label className="toggle">
                  <input type="checkbox" />
                  <div className="toggle-bg"></div>
                  <span className="toggle-title">Set as a super admin</span>
                </label>
              </GridItem>
            </Grid>

            <Grid>
            <GridItem cols={3} sm={6} className='mb-[0]'><div className='light'>Group</div></GridItem>
            <GridItem cols={9} sm={6}>
              <div className='badge pr-2'>General <XCircleIcon className='ml-1 cursor-pointer'/></div>
              <div className='badge pr-2'>Group 1 <XCircleIcon className='ml-1 cursor-pointer'/></div>
              <div className='badge pr-2'>Group 2 <XCircleIcon className='ml-1 cursor-pointer'/></div>
              <div className='badge pr-2'>Group 3 <XCircleIcon className='ml-1 cursor-pointer'/></div>
            </GridItem>
            </Grid>

            <Grid>
            <GridItem cols={12} className='mb-[0] text-center mt-6'>
              <button type='button' className='btn-primary'>Save Changes</button>
            </GridItem>
            </Grid>
        </div>
        <div id="tab_3" className={`${activeTab === 3 ? '' : 'hidden'}`}>
          <h3>Change Password</h3>
          <p>You can change your password here.</p>
          <Grid>
            <GridItem cols={3} sm={6} className='mb-[0]'><div className='light'>Current Password</div></GridItem>
            <GridItem cols={9} sm={6}>
              <input type="password" placeholder='Current Password'/>
            </GridItem>
            <GridItem cols={3} sm={6} className='mb-[0]'><div className='light'>New Password</div></GridItem>
            <GridItem cols={9} sm={6}>
              <input type="password" placeholder='New Password'/>
            </GridItem>
            <GridItem cols={3} sm={6} className='mb-[0]'><div className='light'>Re-enter New Password</div></GridItem>
            <GridItem cols={9} sm={6}>
              <input type="password" placeholder='Re-enter New Password'/>
            </GridItem>

            <GridItem cols={12} className='mb-[0] text-center'>
              <button type='button' className='btn-primary'>Save Changes</button>
            </GridItem>
          </Grid>
        </div>
      </GridItem>
    </Grid>
    </>
  )
}

export default ProfilePage
