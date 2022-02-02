let getUsers = async () => {

    try {
        let doc = await Promise.all(getUser(), getProfile(), getPosts());

        let userProfile = {};
    
        userProfile['user'] = doc[0];
        userProfile['profile'] = doc[1];
        userProfile['posts'] = doc[2];
      
        return userProfile;
    } catch(err) {
        console.log("Some error has occured while fetching getUsers -->",err);
        return err;
    }

  }