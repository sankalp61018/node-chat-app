const users = []

//add User
const addUser  = ({id,username,room}) =>{
    //clean the data
    username = username.trim()
    room = room.trim()

    //Validate
    if(!username || !room){
        return {
            error: "Username and Room are required"
        }
    }

    //Check for existing User
    const existingUser = users.find((user) =>{
        return user.room === room && user.username === username
    })
    if(existingUser){
        return {
            error: "Username is in use"
        }
    }

    //Store User
    const user = {id,username,room}
    users.push(user)
    return {user}
}

//Remove User
const removeUser = (id)=>{
    const index = users.findIndex((user)=>{
        return user.id === id
    })
    if(index!==-1){
        return users.splice(index,1)[0]
    }
}

//Get users

const getUser = (id)=>{
    return users.find((user)=>{
        return user.id === id
    })
}

const getUsersInRoom = (room)=>{
    room = room.trim()
    return users.filter((user) => user.room === room)
}

module.exports = {addUser,removeUser,getUser,getUsersInRoom}