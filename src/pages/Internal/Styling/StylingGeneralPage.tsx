import { Grid, GridItem } from '@components/Grid'
import BreakpointIndicator from '@components/Debug/BreakpointIndicator'
import FaceSmileIcon from '@heroicons/react/24/solid/FaceSmileIcon'
import Processing from '@components/Icon/Processing'
import Title from '@components/utils/Title'
import Breadcrumbs from '@components/Breadcrumbs'

function StylingPage () {
  const TestElement = ({ children }: { children: React.ReactNode }) => {
    return <div>{children}</div>
  }

  return (
    <>
    <Breadcrumbs />
    <Title title="UI Styling"/>

    <div>
      <BreakpointIndicator/>

      <h1>UI Styling</h1>
      <p>This page serves as a showcase of various UI components and their corresponding styles. It provides a visual representation of how different components can be styled and customized to suit different design needs and preferences. Whether you are a designer looking for inspiration or a developer searching for the perfect style for your next project, this page offers a comprehensive collection of UI components and styles to choose from.</p>

      <h2>Color</h2>
      <h3>Colors list</h3>
      <div className='flex items-center mb-1'><div className='bg-primaryColor dark:bg-primaryColor badge badge-md border border-gray-400'>Primary</div>－<code>primaryColor</code></div>
      <div className='flex items-center mb-1'><div className='bg-bgPrimary dark:bg-bgPrimary text-gray-800 dark:text-textPrimary badge badge-md border border-gray-400'>Primary Background</div>－<code>bgPrimary</code></div>
      <div className='flex items-center mb-1'><div className='bg-textPrimary dark:bg-textPrimary badge badge-md border border-gray-400'>Primary Text</div>－<code>textPrimary</code></div>
      <div className='flex items-center mb-1'><div className='bg-secondary dark:bg-secondary badge badge-md border border-gray-400'>Secondary</div>－<code>secondary</code></div>
      <div className='flex items-center mb-1'><div className='bg-success dark:bg-success badge badge-md border border-gray-400'>Success</div>－<code>success</code></div>
      <div className='flex items-center mb-1'><div className='bg-danger dark:bg-danger badge badge-md border border-gray-400'>Danger</div>－<code>danger</code></div>
      <div className='flex items-center mb-1'><div className='bg-warning dark:bg-warning badge badge-md border border-gray-400'>Warning</div>－<code>warning</code></div>
      <div className='flex items-center mb-1'><div className='bg-info dark:bg-info badge badge-md border border-gray-400'>Info</div>－<code>info</code></div>
      <div className='flex items-center mb-1'><div className='bg-light dark:bg-light badge badge-md border border-gray-400'>Light</div>－<code>light</code></div>

      <h2>Typography</h2>
      <h3>Title</h3>
      <h1>h1.Heading</h1>
      <h2>h2.Heading</h2>
      <h3>h3.Heading</h3>
      <h4>h4.Heading</h4>
      <h5>h5.Heading</h5>

      <h3>Text</h3>
      <div><p>Text (default/primary)</p></div>
      <div><p className='secondary'>Text (secondary)</p></div>
      <div><p className='success'>Text (success)</p></div>
      <div><p className='danger'>Text (danger)</p></div>
      <div><p className='warning'>Text (warning)</p></div>
      <div><p className='info'>Text (info)</p></div>
      <div><p className='light'>Text (light)</p></div>
      <div><a href="#" title="HyperlinkTitle">Hyperlink (link)</a></div>
      <div><u>Text (underline)</u></div>
      <div><s>Text (delete)</s></div>
      <div><strong>Text (strong)</strong></div>
      <div><i>Text (italic)</i></div>
      <div><code>Text (code)</code></div>
      <div><kbd>Text (kbd)</kbd></div>
      <div><abbr title="Hypertext Markup Language">Text(abbr)</abbr></div>
      <div><sub>Text (sub)</sub></div>
      <div><sup>Text (sup)</sup></div>
      <div><small>Text (small)</small></div>
      <div><mark>Text (mark)</mark></div>
      <div><time dateTime="2023-04-25T12:00:00Z">April 25, 2023 at 12:00 PM UTC (time)</time></div>

<h3>Details</h3>
<details>
  <summary>Details Summary</summary>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur, lectus et aliquam viverra, sapien sem convallis nulla, eu molestie est nunc et nisl. Ut tristique malesuada metus et ullamcorper. Cras maximus lacus in mollis rutrum. Cras nisl quam, feugiat at libero et, molestie rhoncus sem. Suspendisse leo ligula, tincidunt ac neque eleifend, feugiat suscipit enim. Vestibulum nisl arcu, viverra vel dui eget, consectetur euismod augue. Maecenas ut justo vitae quam efficitur condimentum. Phasellus blandit sapien odio, sed facilisis tortor aliquam eu. Donec a mollis est. Aliquam tempor commodo nisl, non eleifend ex. Nulla vitae eros placerat, maximus massa id, dignissim mauris.</p>
</details>
<h3>Blockquote</h3>
<blockquote>
  Blockquote
</blockquote>
<h3>pre</h3>
<pre>
{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur, lectus et aliquam viverra, sapien sem convallis nulla, eu molestie est nunc et nisl. Ut tristique malesuada metus et ullamcorper. Cras maximus lacus in mollis rutrum. Cras nisl quam, feugiat at libero et, molestie rhoncus sem. Suspendisse leo ligula, tincidunt ac neque eleifend, feugiat suscipit enim. Vestibulum nisl arcu, viverra vel dui eget, consectetur euismod augue. Maecenas ut justo vitae quam efficitur condimentum. Phasellus blandit sapien odio, sed facilisis tortor aliquam eu. Donec a mollis est. Aliquam tempor commodo nisl, non eleifend ex. Nulla vitae eros placerat, maximus massa id, dignissim mauris.

                   ___====-_  _-====___
             _--~~~#####//      \\\\#####~~~--_
           -~##########// (    ) \\\\##########~-_
         -############//  |\\^^/|  \\\\############-
       _~############//   (@::@)   \\\\############~_
      ~#############((     \\\\//     ))#############~
     -###############\\     (oo)    //###############-
    -#################\\\\  / \`' \\  //#################-
   -###################\\\\/  ()  \\//###################-
  _#/|##########/\\######(  (())  )######/|##########||#_
  |/ |#/|#/|#/\\/  \\#/|##\\  )  (  /##/|#/  |/|#/|#/|| |
  '  |/  V  V  \`  V  #/|#|/(/  (  |)/|#/|#/  V '  V ||
      \`   \`  \`      \`   /(__/  |)/|#/|#/     '  '  '
          (  \\ /  \\_|  \\_/  \\//  \\/|   |_/  |__  |
          <__/  \\  \\/  \\__/  <_/  \\_/\\_/  |_|  |_|
`}
</pre>
      <h3>divider</h3>
      <hr/>

      <h3>Img</h3>
      <div><img src="https://via.placeholder.com/150" alt="Placeholder" title="ImageTitle" /></div>
      <div><img src="https://via.placeholder.com/150" alt="Placeholder" title="ImageTitle" /></div>
      <div><img src="https://via.placeholder.com/1500x200" alt="Placeholder" title="ImageTitle" /></div>
      <div><img src="https://via.placeholder.com/2000x200" alt="Placeholder" title="ImageTitle" /></div>
      <div><img src="https://via.placeholder.com/300x500" alt="Placeholder" title="ImageTitle" /></div>

      <h3>ul</h3>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
      <h3>ol</h3>
      <ol>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ol>

      <h3>Table</h3>
      <div className='overflow-x-auto'>
        <table>
          <caption>Table Caption</caption>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1, Cell 1</td>
              <td>Row 1, Cell 2</td>
              <td>Row 1, Cell 3</td>
            </tr>
            <tr>
              <td>Row 2, Cell 1</td>
              <td>Row 2, Cell 2</td>
              <td>Row 2, Cell 3</td>
            </tr>
            <tr>
              <td>Row 3, Cell 1</td>
              <td>Row 3, Cell 2</td>
              <td>Row 3, Cell 3</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='overflow-x-auto'>
        <table className='max-w-3xl mx-auto'>
          <caption>Recent Sales<small> | Today</small></caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>#2644</td><td>Angus Grady</td><td>Ut voluptatem id earum et</td><td>$67<sub> USD</sub></td><td><div className='badge badge-sm badge-danger'>Rejected</div></td></tr>
            <tr><td>#2644</td><td>Raheem Lehner</td><td>Sunt similique distinctio</td><td>$165<sub> USD</sub></td><td><div className='badge badge-sm badge-success'>Approved</div></td></tr>
            <tr><td>#2147</td><td>Bridie Kessler</td><td>Blanditiis dolor omnis similique</td><td>$47<sub> USD</sub></td><td><div className='badge badge-sm badge-warning'>Pending</div></td></tr>
            <tr><td>#2049</td><td>Ashleigh Langosh</td><td>At recusandae consectetur</td><td>$147<sub> USD</sub></td><td><div className='badge badge-sm badge-success'>Approved</div></td></tr>
            <tr><td>#2457</td><td>Brandon Jacob</td><td>At praesentium minu</td><td>$64<sub> USD</sub></td><td><div className='badge badge-sm badge-success'>Approved</div></td></tr>
          </tbody>
        </table>
      </div>

      <h3>Form</h3>
      <form>
        <fieldset>
          <legend>Form Legend</legend>
          <div className='form-group'>
            <div className='label'>
              <label className='label-text' htmlFor="name">Name:</label>
            </div>
            <input type="text" placeholder='Name'/>
          </div>
          <div className='form-group'>
            <div className='label'>
              <label className='label-text' htmlFor="email">Email:</label>
            </div>
            <input type="email" placeholder='johndoe@example.com'/>
          </div>
          <div className='form-group'>
            <div className='label'>
              <label className='label-text' htmlFor="password">Password:</label>
            </div>
            <input type="password" placeholder='password' />
          </div>
          <div className='form-group'>
            <div className='label'>
              <label className='label-text' htmlFor="message">Message:</label>
            </div>
            <textarea placeholder='Enter your message here...'>
              Enter your message here...
            </textarea>
          </div>
          <div className='form-group'>
            <button type="submit" className='btn-primary'>Submit</button>
          </div>
        </fieldset>
      </form>

      <h3>Badge</h3>
      <div>
        <h4>Badge Normal</h4>
        <div className="badge">neutral</div>
        <div className="badge badge-primary">badge-primary</div>
        <div className="badge badge-secondary">badge-secondary</div>
        <div className="badge badge-success">badge-success</div>
        <div className="badge badge-danger">badge-danger</div>
        <div className="badge badge-warning">badge-warning</div>
        <div className="badge badge-lg">badge-lg</div>
        <div className="badge badge-md">badge-md</div>
        <div className="badge badge-sm">badge-sm</div>
      </div>
      <div>
        <h4>Badge w/ hyperlink</h4>
        <a className="badge" title="HyperlinkTitle">neutral</a>
        <a className="badge badge-primary" title="HyperlinkTitle">badge-primary</a>
        <a className="badge badge-secondary" title="HyperlinkTitle">badge-secondary</a>
        <a className="badge badge-success" title="HyperlinkTitle">badge-success</a>
        <a className="badge badge-danger" title="HyperlinkTitle">badge-danger</a>
        <a className="badge badge-warning" title="HyperlinkTitle">badge-warning</a>
        <a className="badge badge-lg" title="HyperlinkTitle">badge-lg</a>
        <a className="badge badge-md" title="HyperlinkTitle">badge-md</a>
        <a className="badge badge-sm" title="HyperlinkTitle">badge-sm</a>
      </div>
      <div>
        <h4>Badge w/ icon</h4>
        <div className="badge"><FaceSmileIcon/>neutral</div>
        <div className="badge badge-primary"><FaceSmileIcon/>badge-primary</div>
        <div className="badge badge-secondary"><FaceSmileIcon/>badge-secondary</div>
        <div className="badge badge-success"><FaceSmileIcon/>badge-success</div>
        <div className="badge badge-danger"><FaceSmileIcon/>badge-danger</div>
        <div className="badge badge-warning"><FaceSmileIcon/>badge-warning</div>
        <div className="badge badge-lg"><FaceSmileIcon/>badge-lg</div>
        <div className="badge badge-md"><FaceSmileIcon/>badge-md</div>
        <div className="badge badge-sm"><FaceSmileIcon/>badge-sm</div>
      </div>

      <h3>progress</h3>
      <progress value="70" max="100"></progress>

      <h3>tooltip</h3>
      <div className='flex flex-row gap-4 flex-wrap'>
        <div>
          <div className="tooltip tooltip-top" data-tip="Top">Tooltip top</div>
        </div>
        <div>
          <div className="tooltip tooltip-bottom" data-tip="Bottom">Tooltip bottom</div>
        </div>
        <div>
          <div className="tooltip tooltip-left" data-tip="Left">Tooltip left</div>
        </div>
        <div>
          <div className="tooltip tooltip-right" data-tip="Right">Tooltip right</div>
        </div>
      </div>

      <h3>Checkbox</h3>
      <label>
        <input type="checkbox" className="checkbox" />
        checkbox
      </label>

      <h3>Toggle</h3>
      <label className="toggle">
        <input type="checkbox" value="" className=""/>
        <div className="toggle-bg"></div>
        <span className="toggle-title">Toggle me</span>
      </label>

      <h3>Range</h3>
      <h4>Normal</h4>
      <input
        className='w-1/2'
        type="range"
        min="0"
        max="1000"></input>

      <h4>Step</h4>
      <input type="range" className='w-1/2' min="0" max="100" step="25" />
      <div className="w-1/2 flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>

      <h3>File upload</h3>
      <div className='file-container'>
        <label>
          <input type="file" />
        </label>
      </div>

      <h3>Process</h3>
      <div className="flex items-center justify-center max-w-36">
          <Processing className='-ml-1 mr-3 h-5 w-5'></Processing>
          Processing...
      </div>

<h3>Radio Group</h3>
Reference <a href='https://headlessui.com/react/radio-group' target='_blank' rel="noreferrer" >Radio Group</a> - @headlessui/react
<details>
  <summary>Example Code</summary>
  <code>
    {`import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

function MyRadioGroup() {
  let [plan, setPlan] = useState('startup')

  return (
    <RadioGroup value={plan} onChange={setPlan}>
    <RadioGroup.Label>Plan</RadioGroup.Label>
    <RadioGroup.Option value="startup" >
      {({ checked }) => (
        <span className={\`inline-block w-36 text-center px-8 py-4  \${checked ? 'bg-primaryColor' : ''}\`}>Startup</span>
      )}
    </RadioGroup.Option>
    <RadioGroup.Option value="business">
      {({ checked }) => (
        <span className={\`inline-block w-36 text-center px-8 py-4  \${checked ? 'bg-primaryColor' : ''}\`}>Business</span>
      )}
    </RadioGroup.Option>
    <RadioGroup.Option value="enterprise">
      {({ checked }) => (
        <span className={\`inline-block w-36 text-center px-8 py-4  \${checked ? 'bg-primaryColor' : ''}\`}>Enterprise</span>
      )}
    </RadioGroup.Option>
    </RadioGroup>
  )
}
`}
  </code>
</details>

      <h3>Pagination</h3>
      <div className='mb-2'>
        <div className="btn-group pagination">
          <button className="btn btn-xs">1</button>
          <button className="btn btn-xs btn-active">2</button>
          <button className="btn btn-xs">3</button>
          <button className="btn btn-xs">4</button>
        </div>
      </div>
      <div>
        <div className="btn-group pagination">
          <button className="btn btn-xs">«</button>
          <button className="btn btn-xs">‹</button>
          <button className="btn btn-xs">1</button>
          <button className="btn btn-xs btn-active">2</button>
          <button className="btn btn-xs">3</button>
          <button className="btn btn-xs">4</button>
          <button className="btn btn-xs">5</button>
          <button className="btn btn-xs">›</button>
          <button className="btn btn-xs">»</button>
        </div>
        <div>
          <select className="w-16">
            <option disabled selected>10</option>
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>&nbsp;entries per page
        </div>
      </div>

      <h3>Steps</h3>
      <div>
        <ul className="steps">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
      </div>

      <h3>Tabs</h3>
      <div className="tabs">
        <div className="tab tab-bordered">Tab 1</div>
        <div className="tab tab-bordered tab-active">Tab 2</div>
        <div className="tab tab-bordered">Tab 3</div>
      </div>

      <h3>Breadcrumbs</h3>
      <div className="breadcrumbs">
        <ul>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              Home
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              Documents
            </a>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            Add Document
          </li>
        </ul>
      </div>

      <hr/>

      <h3>Custom css</h3>
      <Grid>
        <GridItem cols={3}><b>Selector</b></GridItem>
        <GridItem cols={9}><b>Example</b></GridItem>
      </Grid>
      <Grid>
        <GridItem cols={3}><code>.no-select</code></GridItem>
        <GridItem cols={9}><p className='no-select'>You cannot select this text.</p></GridItem>
      </Grid>
      <Grid>
        <GridItem cols={3}><code>.image-crisp</code></GridItem>
        <GridItem cols={9}>
          <p>The image will be rendered clearly on low-resolution devices.</p>
          <p>Before</p>
          <img src='https://via.placeholder.com/1500x100' className='block' />
          <p>After</p>
          <img src='https://via.placeholder.com/1500x100' className='block image-crisp' />
          </GridItem>
      </Grid>

      <Grid>
        <GridItem withBg>
            <TestElement>12</TestElement>
        </GridItem>
      </Grid>

      <h4>Occupying xs=6 sm=4 md=3 lg=2 xl=1</h4>
      <Grid>
        <GridItem cols={1} xs={6} sm={4} md={3} lg={2} xl={1} withBg><TestElement>item</TestElement></GridItem>
        <GridItem cols={1} xs={6} sm={4} md={3} lg={2} xl={1} withBg><TestElement>item</TestElement></GridItem>
        <GridItem cols={1} xs={6} sm={4} md={3} lg={2} xl={1} withBg><TestElement>item</TestElement></GridItem>
        <GridItem cols={1} xs={6} sm={4} md={3} lg={2} xl={1} withBg><TestElement>item</TestElement></GridItem>
        <GridItem cols={1} xs={6} sm={4} md={3} lg={2} xl={1} withBg><TestElement>item</TestElement></GridItem>
        <GridItem cols={1} xs={6} sm={4} md={3} lg={2} xl={1} withBg><TestElement>item</TestElement></GridItem>
        <GridItem cols={1} xs={6} sm={4} md={3} lg={2} xl={1} withBg><TestElement>item</TestElement></GridItem>
        <GridItem cols={1} xs={6} sm={4} md={3} lg={2} xl={1} withBg><TestElement>item</TestElement></GridItem>
        <GridItem cols={1} xs={6} sm={4} md={3} lg={2} xl={1} withBg><TestElement>item</TestElement></GridItem>
        <GridItem cols={1} xs={6} sm={4} md={3} lg={2} xl={1} withBg><TestElement>item</TestElement></GridItem>
        <GridItem cols={1} xs={6} sm={4} md={3} lg={2} xl={1} withBg><TestElement>item</TestElement></GridItem>
        <GridItem cols={1} xs={6} sm={4} md={3} lg={2} xl={1} withBg><TestElement>item</TestElement></GridItem>
      </Grid>

      <h4>3 columns of equal width, taking up a full line for all resolutions</h4>
      <Grid>
        <GridItem cols={4} withBg><TestElement>4/12</TestElement></GridItem>
        <GridItem cols={4} withBg><TestElement>4/12</TestElement></GridItem>
        <GridItem cols={4} withBg><TestElement>4/12</TestElement></GridItem>
      </Grid>

      <h4>Offset-4 and col-8 take up 1 line</h4>
      <Grid>
        <GridItem cols={8} offset={4} withBg>
          <TestElement>offset-4 col-8</TestElement>
        </GridItem>
      </Grid>

      <h4>3 columns of equal width, occupying a full line for large screens and tablet resolutions, displaying only 1 column per line for mobile resolutions</h4>
      <Grid>
        <GridItem cols={12} md={4} withBg><TestElement>4/12</TestElement></GridItem>
        <GridItem cols={12} md={4} withBg><TestElement>4/12</TestElement></GridItem>
        <GridItem cols={12} md={4} withBg><TestElement>4/12</TestElement></GridItem>
      </Grid>

      <h4>2 columns, the left column takes up 1/3 of the width, the right column takes up 2/3 of the width</h4>
      <Grid>
        <GridItem cols={12} lg={4} withBg><TestElement>4/12</TestElement></GridItem>
        <GridItem cols={12} lg={8} withBg><TestElement>8/12</TestElement></GridItem>
      </Grid>

      <h4>1 column, occupying a full line for large screens and tablet resolutions, displaying only 1 column per line for mobile resolutions</h4>
      <Grid>
        <GridItem cols={12} withBg><TestElement>12/12</TestElement></GridItem>
      </Grid>

      <h4>Application of inner grid</h4>
      <Grid>
        <GridItem cols={4} offset={8} withBg>
          <TestElement>offset-8 col4</TestElement>
        </GridItem>
      </Grid>
      <Grid>
        <GridItem cols={8}>
          <Grid>
            <GridItem cols={4} sm={12} md={12} xl={4} withBg><TestElement>4/8</TestElement></GridItem>
            <GridItem cols={4} sm={12} md={12} xl={4} withBg><TestElement>4/8</TestElement></GridItem>
            <GridItem cols={4} sm={12} md={12} xl={4} withBg><TestElement>4/8</TestElement></GridItem>
            <GridItem cols={12} withBg><TestElement>12/8</TestElement></GridItem>
          </Grid>
        </GridItem>
        <GridItem cols={4} withBg>
        <TestElement><div className='flex items-center justify-center'>4</div></TestElement>
        </GridItem>
      </Grid>

    </div>
    </>
  )
}

export default StylingPage
