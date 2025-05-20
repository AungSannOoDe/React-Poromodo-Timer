import React, { useState } from 'react'
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';
const ChangeLanguage = () => {
    const {  i18n } = useTranslation();
    const [lang,setLang]=useState("en")
    const  ChangeLang=(event)=>{
     i18n.changeLanguage(event.target.value)
     setLang(event.target.value)
    }
  return (
    <section className='mt-6 col-span-3'>
      <div className='flex justify-center'>
      <FormControl  className='bg-green-100  w-28  lg:w-32 outline-0 ring-0 text-sm'>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lang}
            onChange={ChangeLang}
            label="Age">
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="my">Myanmar</MenuItem>
          </Select>
        </FormControl>
      </div>
        
    </section>

  )
}

export default ChangeLanguage