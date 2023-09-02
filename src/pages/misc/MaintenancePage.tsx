import _404 from 'src/assets/404.svg'
import Title from '@components/utils/Title'

interface MaintenancePageProps {
  time?: string
  email?: string
}

function MaintenancePage ({ time = 'Now', email = 'sales@aetina.com' }: MaintenancePageProps) {
  return (
    <>
    <Title title='System Maintenance'></Title>
    <div className="flex flex-col items-center justify-center h-full no-select pointer-events-none">
      <img className="md:w-1/2 h-auto" color='gray' src={_404}/>
      <h1 className="md:text-5xl font-bold">System Maintenance</h1>
      <div>
        <p>We apologize for the inconvenience. Our website is currently undergoing system maintenance and is temporarily unavailable.</p>
        <div className='badge badge-md mb-1'>Maintenance Time</div><p className='pl-3'><time dateTime="{time}">{time}</time></p>
        <div className='badge badge-md mb-1'>Maintenance Details</div><p className='pl-3'>We are performing system upgrades, fixing vulnerabilities, or adding new features to provide a better user experience and performance.</p>
        <div className='badge badge-md mb-1'>Unavailable Notice</div><p className='pl-3'>During this time, you may not have access to certain features or pages of the website.</p>
        <div className='badge badge-md mb-1'>Apology Message</div><p className='pl-3'>We sincerely apologize for any inconvenience caused. We will complete the maintenance as soon as possible and restore the website to normal operation.</p>
        <div className='badge badge-md mb-1'>Contact Information</div><p className='pl-3'>If you have any questions or need immediate assistance, please contact our customer service team at <b>{email}</b>.</p>        
      </div>
    </div>
    </>
  )
}

export default MaintenancePage
