import React, { useState } from 'react'
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';
const ChangeLanguage = () => {
    const {  i18n } = useTranslation();
    const [lang,setLang]=useState("en")
    const  ChangeLang=(event)=>{
        console.log(event.target.value);
     i18n.changeLanguage(event.target.value)
     setLang(event.target.value)
    }
  return (
    <section className='mt-6'>
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
    </section>

  )
}

export default ChangeLanguage