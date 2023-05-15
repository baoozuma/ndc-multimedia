import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import images from "./importImages";
import {field} from "../contentDatabase/field";
import { useState, useEffect } from 'react';

function TabField(index) {
  return (
  <section className="field" >

  <blockquote data-aos="fade-left" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out">
    <h2 className={field[index].class}>{field[index].name}</h2>
    <p>{field[index].title}</p>                    
    </blockquote>
    <img className="page" src={field[index].image}  data-aos="fade-left" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200"/>
</section>)
}
function getWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  function checkWidth() {
    return width >= 960 ? 'vertical' : 'horizontal';
  }
  
  return checkWidth();
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='boxfield'>
      <Typography variant="h4" className="tabtitle">
        <h2>Every component you need is <strong>ready for production</strong></h2>
        <p>Build at an accelerated pace without sacrificing flexibility or control.</p>
        </Typography>
      <Tabs
      className='tabfield'
        orientation={getWidth()}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab className="tab" label={<><img src={images['designicon.png']}/>DESIGN TEAM</>} {...a11yProps(0)} />
        <Tab className="tab" label={<><img src={images['filmicon.png']}/>FILMING TEAM</>} {...a11yProps(1)} />
        <Tab className="tab" label={<><img src={images['mediaicon.png']}/>MEDIA TEAM</>} {...a11yProps(2)} />
        <Tab className="tab" label={<><img src={images['codeicon.png']}/>SOFTWARE TEAM</>} {...a11yProps(3)} />
        <Tab className="tab" label={<><img src={images['casticon.png']}/>CASTING TEAM</>} {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0} className='about' id='panel-0'>
      <section className="field" >
        
        <blockquote data-aos="fade-left" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200">
          <h2 className={field[0].class}>{field[0].name}</h2>
          <p>{field[0].title}</p>                    
          </blockquote>
          <img className="page" src={images['design (1).png']}  data-aos="fade-left" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out" />
          <img className="page" src={images['design (2).png']}  data-aos="fade-left" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out" />
          <img className="page" src={images['design (3).png']}  data-aos="fade-left" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out"/>


      </section>
      </TabPanel>
      <TabPanel value={value} index={1} className='about' id='panel-1'>
        {TabField(1)}
      </TabPanel>
      <TabPanel value={value} index={2} className='about' id='panel-2'>
        {TabField(2)}
      </TabPanel>
      <TabPanel value={value} index={3} className='about' id='panel-3'>
        {TabField(3)}
      </TabPanel>
      <TabPanel value={value} index={4} className='about' id='panel-4'>
        {TabField(4)}
      </TabPanel>

    </Box>
  );
}
