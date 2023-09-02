
import { useState } from 'react'
import { Grid, GridItem } from '@components/Grid'
import Breadcrumbs from '@components/Breadcrumbs'
import Button from '@components/Buttons'
import InputText, { type formFuncInput } from '@components/Input/InputText'
import SelectBox from '@components/Input/SelectBox'

import TitleCard from '@components/Cards/TitleCard'
import StatsCard from '@components/Cards/StatsCard'

import AlertModal from '@components/Modals'
import Modal from '@components/Modals/FormModal'

import { useToast } from '@hooks/useToast'

import Title from '@components/utils/Title'
import Skeleton from '@components/utils/Skeleton'
import Unauthorized from '@components/utils/Unauthorized'
import DataNotFound from '@components/utils/DataNotFound'
import BreakpointIndicator from '@components/Debug/BreakpointIndicator'

import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'

function StylingComponentPage () {
  const [inputSample, setInputSample] = useState('')

  const updateSampleValue = ({ updateType, value }: formFuncInput) => {
    setInputSample(value)
  }
  // Function to handle click event
  const handleClick = () => {
    showToast(`Button clicked at: ${new Date().toISOString()}`)
  }

  // ListBox
  const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false }
  ]
  const options = people.map(person => ({
    name: person.name,
    value: person.id.toString() // convert id to string
  }))
  const handleFormUpdate = (input: { updateType: string | undefined, value: string }) => {
    console.log(input)
  }

  // Modal
  const [isOpen, setIsOpen] = useState(false)
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const periodOptions = [
    { name: 'Object Detection', value: 'Object Detection' },
    { name: 'Classification', value: 'classification' },
    { name: 'Segmentation', value: 'segmentation' }
  ]

  // Toast
  const showToast = useToast()

  // lazy

  return (
    <>
    <BreakpointIndicator />
    <Breadcrumbs />
    <Title title="Component"/>
    <h1>Component</h1>

    <Grid>
      <GridItem>
      <h2>Button</h2>
      </GridItem>
      <GridItem withBg>
        <h3>Normal</h3>
        <Button>Normal</Button>
        <Button styling='primary'>primary</Button>
        <Button styling='secondary'>secondary</Button>
        <Button styling='success'>success</Button>
        <Button styling='danger'>danger</Button>
        <Button styling='warning'>warning</Button>
        <Button styling='info'>info</Button>
        <Button styling='light'>light</Button>
        <Button styling='dark'>dark</Button>
      </GridItem>
      <GridItem withBg>
        <h3>Disabled</h3>
        <Button isDisabled>Normal</Button>
        <Button styling='primary' isDisabled>primary</Button>
        <Button styling='secondary' isDisabled>secondary</Button>
        <Button styling='success' isDisabled>success</Button>
        <Button styling='danger' isDisabled>danger</Button>
        <Button styling='warning' isDisabled>warning</Button>
        <Button styling='info' isDisabled>info</Button>
        <Button styling='light' isDisabled>light</Button>
        <Button styling='dark' isDisabled>dark</Button>
      </GridItem>
      <GridItem withBg>
        <h3>Size</h3>
        <Button className='btn-sm'>btn-sm</Button>
        <Button>btn</Button>
        <Button className='btn-lg'>btn-lg</Button>
        <Button className='btn-xl'>btn-xl</Button>
      </GridItem>
      <GridItem withBg>
        <h3>isLoading</h3>
        <Button isLoading>Normal</Button>
        <Button styling='primary' isLoading>primary</Button>
        <Button styling='secondary' isLoading>secondary</Button>
        <Button styling='success' isLoading>success</Button>
        <Button styling='danger' isLoading>danger</Button>
        <Button styling='warning' isLoading>warning</Button>
        <Button styling='info' isLoading>info</Button>
        <Button styling='light' isLoading>light</Button>
        <Button styling='dark' isLoading>dark</Button>
        <Button className='btn-sm' isLoading>btn-sm</Button>
        <Button className='btn-lg' isLoading>btn-lg</Button>
        <Button className='btn-xl' isLoading>btn-xl</Button>
      </GridItem>
      <GridItem withBg>
        <h3>Throttle</h3>
        <Button styling='primary' onClick={handleClick}>No Throttle</Button>
        <Button styling='primary' onClick={handleClick} isThrottled>isThrottled</Button>
        <Button styling='primary' onClick={handleClick} isThrottled delay={500}>isThrottled delay=.5s</Button>
        <Button styling='primary' onClick={handleClick} isThrottled delay={5000}>isThrottled delay=5s</Button>
      </GridItem>
    </Grid>

    <Grid>
      <h2>Input</h2>
      <GridItem cols={6} lg={4} withBg>
        <h3>Sample</h3>
        <InputText type="text" defaultValue={inputSample} updateType="" containerClassName="mt-4" labelTitle="" updateFormValue={ updateSampleValue } labelStyle={''} placeholder='Enter some text here'/>
        <p>{inputSample}</p>
        <h3>Input with icon <code>.input-group</code></h3>
        <div className="input-group">
          <InputText type="text" defaultValue={inputSample} updateType="" containerClassName="m-0" InputClassName="" labelTitle="" updateFormValue={ updateSampleValue } labelStyle={''} placeholder='Enter some text here'/>
          <button type='button' className='btn-primary'><MagnifyingGlassIcon className='w-4 h-4'/></button>
        </div>

      </GridItem>

      <GridItem cols={6} lg={4} withBg>
        <h3>Normal</h3>
        <InputText type="text"
          updateType="updateType"
          labelTitle="labelTitle"
          placeholder='placeholder'
          updateFormValue={() => { }} />
      </GridItem>
      <GridItem cols={6} lg={4} withBg>
        <h3>with labelDescription/ labelBL/ labelBR</h3>
        <InputText type="text"
          updateType="updateType"
          labelTitle="labelTitle"
          labelDescription="labelDescription"
          labelBL="labelBL"
          labelBR="labelBR"
          placeholder='placeholder'
          updateFormValue={() => { }} />
      </GridItem>
      <GridItem cols={6} lg={4} withBg>
        <h3>with labelDescription/ labelBL/ label BR</h3>
        <InputText type="text"
          updateType="updateType"
          labelTitle="labelTitle"
          labelDescription="labelDescription"
          labelBL="labelBL"
          labelBR="labelBR"
          placeholder='placeholder'
          updateFormValue={() => { }} />
      </GridItem>
      <GridItem cols={6} lg={4} withBg>
        <h3>with required</h3>
        <InputText type="text"
          updateType="updateType"
          labelTitle="labelTitle"
          required={true}
          placeholder='placeholder'
          updateFormValue={() => { }} />
      </GridItem>
      <GridItem cols={6} lg={4} withBg>
        <h3>with required/ labelDescription</h3>
        <InputText type="text"
          updateType="updateType"
          labelTitle="labelTitle"
          labelDescription="labelDescription"
          required={true}
          placeholder='placeholder'
          updateFormValue={() => { }} />
      </GridItem>
    </Grid>

    <Grid>
      <h2>Select Box</h2>
      <GridItem withBg>
      <div>
        <div className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select a option</span>
            <span className="label-text label-text-alt">Alt label</span>
          </div>
          <SelectBox
            labelTitle="My Label"
            options={options}
            updateFormValue={handleFormUpdate}
          />
          <div className="label">
            <span className="label-text label-text-alt">Alt label</span>
            <span className="label-text label-text-alt">Alt label</span>
          </div>
        </div>
      </div>
      <details>
        <summary>Example Code</summary>
        <code>
          {`import React from 'react'
import SelectBox from '@components/SelectBox'

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false }
]

const options = people.map(person => ({
  name: person.name,
  value: person.id.toString()  // convert id to string
}))

function MySelectList() {
  const handleFormUpdate = (input: { updateType: string | undefined, value: string }) => {
    console.log(input)
  }

  return (
    <>
      <SelectBox 
        labelTitle="My Label"
        options={options}
        updateFormValue={handleFormUpdate}
      />
    </>
  )
}
`}
        </code>
      </details>
      </GridItem>
    </Grid>
    <Grid>
      <h2>Cards TBD</h2>
      <GridItem withBg>
        <h3>TitleCard</h3>
        <div className='flex flex-col md:flex-row gap-3'>
          <TitleCard
          title="Sample Card">Children</TitleCard>
          <TitleCard
          title="Sample Card">Children</TitleCard>
          <TitleCard
          title="Sample Card">Children</TitleCard>
        </div>
        <details>
          <summary>Example Code</summary>
          <code>
            {`import TitleCard from '@components/Cards/TitleCard'

<div className='flex flex-col md:flex-row gap-3'>
  <TitleCard
  title="Sample Card">Children</TitleCard>
  <TitleCard
  title="Sample Card">Children</TitleCard>
  <TitleCard
  title="Sample Card">Children</TitleCard>
</div>
  `}
          </code>
        </details>
      </GridItem>
      <GridItem withBg>
        <h3>StatsCard</h3>
        <div className='flex flex-col md:flex-row gap-3'>
          <StatsCard title='Training info' value='100%' description='Training info description' />
          <StatsCard title='Accuracy' value='100%' description='Model Accuracy' />
          <StatsCard title='Precision' value='30%' description='tp/(tp+tf)' />
        </div>
        <details>
          <summary>Example Code</summary>
          <code>
            {`import StatsCard from '@components/Cards/StatsCard'

<div className='flex flex-col md:flex-row gap-3'>
  <StatsCard title='Training info' value='100%' description='Training info description' />
  <StatsCard title='Accuracy' value='100%' description='Model Accuracy' />
  <StatsCard title='Precision' value='30%' description='tp/(tp+tf)' />
</div>
  `}
          </code>
        </details>
      </GridItem>
    </Grid>

    <Grid>
      <h2>Breadcrumbs</h2>
      <GridItem withBg>
      <div>
        <Breadcrumbs />
      </div>
      <div>
        <details>
          <summary>Example Code</summary>
          <code>
            {`import Breadcrumbs from '@components/Breadcrumbs'

  function MyBreadcrumbs() {

    return (
      <>
        <Breadcrumbs />
      </>
    )
  }
  `}
          </code>
        </details>
      </div>
      </GridItem>
    </Grid>

    <Grid>
      <h2>Dialog (Modal)</h2>
      <GridItem withBg>

    Reference <a href='https://headlessui.com/react/dialog' target='_blank' rel="noreferrer" >Dialog (Modal)</a> - @headlessui/react
      <div>
        <button onClick={() => { setIsOpen(true) }} >Form</button>
        <button onClick={() => { setIsAlertOpen(true) }} >Disclaimer</button>
        <AlertModal title='Disclaimer'
          closeTitle='Close'
          open={isAlertOpen}
          onClose={() => { setIsAlertOpen(!isAlertOpen) }}>
            <p>By submitting your images, videos, IP addresses or other data for inference using our internal AI models, you acknowledge that the results are generated automatically based on the data provided and may not be completely accurate or error-free. We are not liable for any damages or losses resulting from the use of the inference results. The data you submit will be used solely for the purpose of providing you with the inference results and will not be shared with any third party without your consent, unless required by law.</p>
        </AlertModal>

      <Modal title='Add new project'
        open={isOpen}
        onClose={() => { setIsOpen(!isOpen) }}
        onSave={() => { showToast('Save successful', { type: 'success' }) }}>
        <InputText type="text"
          updateType="updateType"
          labelTitle="labelTitle"
          placeholder='placeholder'
          updateFormValue={() => { }} />
        <InputText type="text"
          updateType="updateType"
          labelTitle="with labelDescription/labelBL/labelBR"
          labelDescription="labelDescription"
          labelBL="labelBL"
          labelBR="labelBR"
          placeholder='placeholder'
          updateFormValue={() => { }} />
        <InputText type="text"
          updateType="updateType"
          labelTitle="with labelDescr iption/ labelBL/ label BR"
          labelDescription="labelDescription"
          labelBL="labelBL"
          labelBR="labelBR"
          placeholder='placeholder'
          updateFormValue={() => { }} />
        <InputText type="text"
          updateType="updateType"
          labelTitle="with required"
          required={true}
          placeholder='placeholder'
          updateFormValue={() => { }} />
        <InputText type="text"
          updateType="updateType"
          labelTitle="with required/labelDescription"
          labelDescription="labelDescription"
          required={true}
          placeholder='placeholder'
          updateFormValue={() => { }} />
        <InputText type="text"
          updateType="updateType"
          labelTitle="Project Name"
          placeholder='placeholder'
          updateFormValue={() => { }} />
        <InputText type="text"
          updateType="updateType"
          labelTitle="Project Name"
          placeholder='placeholder'
          updateFormValue={() => { }} />
        <InputText type="text"
          updateType="updateType"
          labelTitle="Project Name"
          placeholder='placeholder'
          updateFormValue={() => { }} />
        <InputText type="text"
          updateType="updateType"
          labelTitle="Project Name"
          placeholder='placeholder'
          updateFormValue={() => { }} />

        <SelectBox
          options={periodOptions}
          labelTitle=" Select Project type"
          defaultValue=" Object Detection"
          updateFormValue={() => { }}
        />
      </Modal>
      </div>
      <details>
        <summary>Example Code</summary>
        <code>
          {`import AlertModal from '@components/Modals'

function Modal() {
  const [isAlertOpen, setIsAlertOpen] = useState(false)

return (
    <AlertModal title='Disclaimer'
      closeTitle='Close'
      open={isAlertOpen}
      onClose={() => { setIsAlertOpen(!isAlertOpen) }}>
    By submitting your images, videos, IP addresses or other data for inference using our internal AI models, you acknowledge that the results are generated automatically based on the data provided and may not be completely accurate or error-free. We are not liable for any damages or losses resulting from the use of the inference results. The data you submit will be used solely for the purpose of providing you with the inference results and will not be shared with any third party without your consent, unless required by law.
    </AlertModal>
  )
}
      `}
        </code>
      </details>
      </GridItem>
    </Grid>

    <Grid>
      <h2>Toast</h2>
      <GridItem withBg>
      <div>
        Reference <a href='https://www.npmjs.com/package/react-toastify' target='_blank' rel="noreferrer" >React-Toastify</a>
        <div>
          <button onClick={() => { showToast('A Toast example', { type: 'default' }); showToast('A Toast example', { type: 'success' }); showToast('A Toast example', { type: 'error' }); showToast('A Toast example', { type: 'warning' }); showToast('A Toast example', { type: 'info' }) }} >Toast</button>
        </div>
        <details>
          <summary>Example Code</summary>
          <code>
            {`import { useToast } from '@hooks/useToast'

const [isOpen, setIsOpen] = useState(false)

function Toast() {
  const showToast = useToast()

  return (
    <button onClick={ () => { showToast('OK', { type: 'default' }); showToast('OK', { type: 'success' }); showToast('OK', { type: 'error' }); showToast('OK', { type: 'warning' }); showToast('OK', { type: 'info' }) }}>Toast</button>
  )
}
        `}
          </code>
        </details>
      </div>
      </GridItem>
    </Grid>

    <Grid>
      <h2>utils</h2>
      <GridItem>
      <Grid>
        <GridItem cols={3} sm={6} md={6} lg={3} withBg>
        <h3>Title</h3>
        <div>
          Change page title
          <details>
            <summary>Example Code</summary>
            <code>
            {`import Title from '@components/utils/Title'

function Title() {
  return (
    <>
    <Title title="THE PAGE TITLE"/>
    ...
    </>
  )
}`}
            </code>
          </details>
        </div>
        </GridItem>
        <GridItem cols={3} sm={6} md={6} lg={3} withBg>
          <h3>Skeleton</h3>
          <div>
            <h4>Skeleton </h4>
            <div><Skeleton /></div>

            <h4>Skeleton active</h4>
            <div><Skeleton active/></div>

            <h4>Skeleton avatar</h4>
            <div><Skeleton avatar/></div>

            <h4>Skeleton avatar active</h4>
            <div><Skeleton avatar active/></div>
          </div>
        </GridItem>
        <GridItem cols={3} sm={6} md={6} lg={3} withBg>
          <h3>Unauthorized</h3>
          <div className='flex justify-center w-full'><div className='w-3/4 p-4 flex justify-center border border-gray-300 rounded'><Unauthorized/></div></div>
        </GridItem>
        <GridItem cols={3} sm={6} md={6} lg={3} withBg>
          <h3>DataNotFound</h3>
          <div className='flex justify-center w-full'><div className='w-3/4 p-4 flex justify-center border border-gray-300 rounded'><DataNotFound/></div></div>
        </GridItem>
      </Grid>
      </GridItem>
    </Grid>

    <Grid>
      <h2>Debug</h2>
      <GridItem withBg>
      <div>
        <h3>BreakpointIndicator</h3>
        <div><div className="inline-block bottom-0 right-0 bg-white dark:bg-gray-900 p-2 text-xs rounded-tl-xl font-bold">Current Breakpoint:<span className="hidden text-gray-700 bg-red-200 px-1 rounded-full ml-1 sm:inline-block">SM</span><span className="hidden text-gray-700 bg-red-200 px-1 rounded-full ml-1 md:inline-block">MD</span><span className="hidden text-gray-700 bg-red-200 px-1 rounded-full ml-1 lg:inline-block">LG</span><span className="hidden text-gray-700 bg-red-200 px-1 rounded-full ml-1 xl:inline-block">XL</span><span className="hidden text-gray-700 bg-red-200 px-1 rounded-full ml-1 2xl:inline-block">2XL</span><span className="hidden text-gray-700 bg-red-200 px-1 rounded-full ml-1 3xl:inline-block">3XL</span></div></div>
        <details>
          <summary>Example Code</summary>
          <code>
            {`import BreakpointIndicator from '@components/Debug/BreakpointIndicator'

function BreakpointIndicator() {
  return (
    <>
      <BreakpointIndicator/>
    </>
  )
}`}
          </code>
        </details>
      </div>
      </GridItem>
    </Grid>

    </>
  )
}

export default StylingComponentPage
