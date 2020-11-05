function addUser(username, cb) {
    fs.readFile(PATH_USERS, (err,buffer) => {
        if(err) return cb(err)
        const arr = JSON.parse(buffer)
        if(arr.find(t => t.username == username)) return cb(new Error(username + ' already exists'))
        const user
        user.username=username
        arr.push(user)
        const json = JSON.stringify(arr)
        fs.writeFile(PATH_USERS,json, cb)
    })
    
}

function addArtist(username, artist, cb) {
    fs.readFile(PATH_USERS, (err,buffer)=>{
        if(err) return cb(err)
        const arr = JSON.parse(buffer)
        if(arr.filter(user => user.username == username).length == 0) 
            return cb(new Error('There is no user with username ' + username))
        arr.forEach(t => {if(t.username == username) t.artists.push(artist)});
        const json = JSON.stringify(arr)
        fs.writeFile(PATH_USERS,json, cb)
    })
}

function searchArtist(artist, cb) {
    const url = LASTFM_HOST + LASTFM_TOP_TRACKS + artist
    urllib.request(url, (err, data, res) => {
        if(err) return cb(err)
        const obj = JSON.parse(data)
        if(obj.error) return cb(new Error(obj.message))
        const arr = obj.filter(t => t.artist == artist)
        if(arr.length == 0) return cb(new Error('There is no artist with the name ' + artist))
        cb(null, arr)
    })
}

function addArtist(username, artist, cb) {
    lastfm.searchArtist(artist,(err,arr)=>{if(err) return cb(err)})
    users.addArtist(username,artist, (err) => {
        if(err) return cb(err)
        cb(null)
    })
}

