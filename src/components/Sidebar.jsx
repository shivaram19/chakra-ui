import { AtSignIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons'
import { List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <List color="white" fontSize="1.2em" spacing={4 } >
        <ListItem>
          <NavLink to="/" >
            <ListIcon as={CalendarIcon}/>
            Dashboard
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/create " >
            <ListIcon as={EditIcon} />
            NewTask
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/profile" >
            <ListIcon as={AtSignIcon} />
            Profile
          </NavLink>
        </ListItem>
      </List>
    </div>
  )
}

export default Sidebar
