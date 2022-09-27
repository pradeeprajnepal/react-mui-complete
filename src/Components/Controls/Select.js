import React from 'react';
import {FormControl, InputLabel, MenuItem,FormHelperText ,Select as MuiSelect} from '@mui/material'

export default function select(props) {
    const {name, label, value, onChange,error=null, options}= props
  return (
    <FormControl variant='outlined'
    {...(error &&{error:true})}>
        <InputLabel>{label}</InputLabel>
        <MuiSelect
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        >
            <MenuItem value="">None</MenuItem>
            {
                options.map(
                    item=>(<MenuItem ke={item.id} value={item.id}>{item.title}</MenuItem>)
                )
            }
        </MuiSelect>
        {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}
