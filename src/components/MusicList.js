import React from 'react';


const MusicList = (props) => {
  console.log(props.songs);
  if(props.songs.length === 0) return null;
  const options = props.songs.map((song) => {
  return <h4>{song['im:artist'].label}</h4>
})


  return(
    <div>
     <ol>
      {options}
    </ol>
    </div>

    // {/* <div>
    //   <p>{props.songs[0]['im:name'].label}</p>
    //   <h3>{props.songs[0]['im:artist'].label}</h3>
    // </div> */}
  );
}

export default MusicList;
