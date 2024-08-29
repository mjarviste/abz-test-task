import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import usersService from './services/users'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import UsersSection from './components/UsersSection'
import AddUserSection from './components/AddUserSection'

const App = () => {
  const [usersToShow, setUsersToShow] = useState(6)
  const [showMoreUsers, setShowMoreUsers] = useState(true)
  const [users, setUsers] = useState([])
  const [positions, setPositions] = useState([])
  const [userName, setUserName] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  const [userNumber, setUserNumber] = useState(null)
  const [userPosition, setUserPosition] = useState(null)
  const [userImgFile, setUserImgFile] = useState(null)
  const [userImgFileName, setUserImgFileName] = useState('Upload your photo')
  const [token, setToken] = useState(null)
  const [addUserHeadingText, setAddUserHeadingText] = useState("Working with POST request")
  const [showMoreText, setShowMoreText] = useState("Show more")
  const mainHeadingText = "Test assignment for front-end developer"
  const subText = "What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."
  const usersHeadingText = "Working with GET request"
  //const addUserHeadingText = "Working with POST request"

  useEffect(() => {
    axios
    usersService.getAll()
    .then(response => {
      setUsers(response.users)
    })
    axios 
    usersService.getPositions()
    .then(response => {
      setPositions(response.positions)
      console.log(response.positions)
    })
    usersService.getToken()
    .then(response => {
      console.log(response)
      setToken(response.token)
    })
  }, [])

  const addUser = (event => {
    event.preventDefault()
    console.log(userImgFile)
    if(userName === null || userName.length < 2 || userName.length > 60) {
      alert("Name not suitable")
      return
    }
    if(!/^([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)$/.test(userEmail)) {
      alert("Email not suitable")
      return
    }
    if(!/^(\+380[0-9]{9})$/.test(userNumber)) {
      console.log(userNumber)
      alert("Number not suitable, does not start with +380 or is not the right length")
      return
    }
    if(userPosition === null) {
      alert("Position needs to be selected")
      return
    }
    if(userImgFile === null || userImgFile === undefined) {
      alert("Image file must be selected")
      return
    } else {
      if (userImgFile.size > 5242880) {
        alert("File is too big")
        return
      }
    }
    usersService.getToken()
    .then(response => {
      console.log(response)
      setToken(response.token)
    })
    console.log("Image", userImgFile)
    const newUserObject = {
      email: userEmail,
      name: userName,
      phone: userNumber,
      photo: userImgFile,
      position_id: userPosition
    }

    const formEl = document.querySelector(".form")
    const successEl = document.querySelector("#form-submitted")

    usersService.addUser(newUserObject, token)
    .then(response => {
      console.log(response)
      console.log("Form: ", formEl)
      formEl.style.display = "none"
      successEl.style.display = "block"
      setAddUserHeadingText("User successfully registered")
      setTimeout(() => {
        formEl.style.display = "flex"
        successEl.style.display = "none"
        setAddUserHeadingText("Working with POST request")
      }, 3000)
    })
    .catch(error => {
      if (error.status === 401) {
        alert("The token expired")
        return
      } else if (error.status === 409) {
        alert("User with this phone or email already exist")
        return
      } else if (error.status === 409) {
        alert("User with this phone or email already exist")
        return
      } else {
        alert("Validation failed")
        return
      }
    })
  })

  const showMore = () => {
    setUsersToShow(users.length)
    setShowMoreUsers(false)
    setShowMoreText("Show Less")
  }
  const showLess = () => {
      setUsersToShow(6)
      setShowMoreUsers(true)
      setShowMoreText("Show More")
  }

  const handleNameChange = (event) => {
    setUserName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setUserEmail(event.target.value)
  }
  const handleNumberChange = (event) => {
    
    setUserNumber(event.target.value)
  }
  const handlePositionChange = (event) => {
    setUserPosition(event.target.value)
  }
  const handleImgFileChange = (event) => {
    const imgFile = event.target.files[0]
    if(imgFile === undefined) {
      setUserImgFileName("Upload your photo")
    } else {
      setUserImgFileName(imgFile.name)
    }
    setUserImgFile(imgFile)
  }


  return (
    <>
      <Header/>
      <HeroSection mainHeadingText={mainHeadingText} subText={subText}/>
      <UsersSection usersHeadingText={usersHeadingText} users={users} usersToShow={usersToShow} showMore={showMore} showLess={showLess} showMoreUsers={showMoreUsers} showMoreText={showMoreText}/>
      <AddUserSection addUserHeadingText={addUserHeadingText} positions={positions} addUser={addUser} handleNameChange={handleNameChange} handleEmailChange={handleEmailChange} handleNumberChange={handleNumberChange} handlePositionChange={handlePositionChange} handleImgFileChange={handleImgFileChange} imgFileName={userImgFileName}/>
    </>
  )
}

export default App