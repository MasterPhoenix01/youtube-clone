const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { classNumber } = req.body;
    let subjects = [];

    // Set the subjects based on the classNumber
    switch (classNumber) {
      case '1':
        subjects = [
          { name: 'English', playlistIds: ['PLjm_mvBNlvBa7QyMk4rJ0QTKt05EJSWF1', 'PLjm_mvBNlvBY4TMHcbnFFDOcAtkCgOfpk', 'PLjm_mvBNlvBYImIjBPzdIwRbI14u7XdAF'] },
          // Add more subjects for class 1 if needed
        ];
        break;
      case '2':
        subjects = [
          { name: 'English', playlistIds: ['PLjm_mvBNlvBa7QyMk4rJ0QTKt05EJSWF1', 'PLjm_mvBNlvBY4TMHcbnFFDOcAtkCgOfpk', 'PLjm_mvBNlvBYImIjBPzdIwRbI14u7XdAF'] },
          // Add more subjects for class 2 if needed
        ];
        break;
      case '3':
        subjects = [
          { name: 'English', playlistIds: ['playlistId1', 'playlistId2', 'playlistId3'] },
          // Add more subjects for class 3 if needed
        ];
        break;
      // Add cases for other class numbers and their corresponding subjects and playlist IDs
      default:
        subjects = [{ name: 'Default Subject', playlistIds: ['defaultPlaylistId'] }];
        break;
    }

    const videosBySubject = [];

    // Fetch video IDs for a randomly chosen playlist ID for each subject
    for (let i = 0; i < subjects.length; i++) {
      const { name, playlistIds } = subjects[i];
      const randomPlaylistId = playlistIds[Math.floor(Math.random() * playlistIds.length)];
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${randomPlaylistId}&key=AIzaSyC6pK5uR20baHt0tjuwTq1wPSNMW3zC7_4`
      );
      console.log(response)
      const json = await response.json();
      const videoIds = json.items.map((item) => item.contentDetails.videoId);
      videosBySubject.push({ name, videoIds });
    }

    return res.status(200).json({
      videosBySubject,
    });
  } else {
    console.log('none');
  }
};

export default handler;






// const handler = async (req, res) => {
//     if (req.method === 'POST') {
//       const { classNumber } = req.body;
//       let subjects = [];
  
//       // Set the subjects based on the classNumber
//       switch (classNumber) {
//         case '1':
//           subjects = [
//             { name: 'Maths-1', playlistId: 'PLjm_mvBNlvBa7QyMk4rJ0QTKt05EJSWF1' },
//             { name: 'Civics', playlistId: 'PLjm_mvBNlvBY4TMHcbnFFDOcAtkCgOfpk' },
//             { name: 'Science', playlistId: 'PLjm_mvBNlvBYImIjBPzdIwRbI14u7XdAF' },
//           ];
//           break;
//         case '2':
//           subjects = [
//             { name: 'Maths-1', playlistId: 'PLjm_mvBNlvBa7QyMk4rJ0QTKt05EJSWF1' },
//             { name: 'Civics', playlistId: 'PLjm_mvBNlvBY4TMHcbnFFDOcAtkCgOfpk' },
//             { name: 'Science', playlistId: 'PLjm_mvBNlvBYImIjBPzdIwRbI14u7XdAF' },
//           ];
//           break;
//         case '3':
//           subjects = [
//             { name: 'Maths-1', playlistId: 'PLjm_mvBNlvBa7QyMk4rJ0QTKt05EJSWF1' },
//             { name: 'Civics', playlistId: 'PLjm_mvBNlvBY4TMHcbnFFDOcAtkCgOfpk' },
//             { name: 'Science', playlistId: 'PLjm_mvBNlvBYImIjBPzdIwRbI14u7XdAF' },
//           ];
//           break;
//         case '4':
//           subjects = [
//             { name: 'Maths-1', playlistId: 'PLjm_mvBNlvBa7QyMk4rJ0QTKt05EJSWF1' },
//             { name: 'Civics', playlistId: 'PLjm_mvBNlvBY4TMHcbnFFDOcAtkCgOfpk' },
//             { name: 'Science', playlistId: 'PLjm_mvBNlvBYImIjBPzdIwRbI14u7XdAF' },
//           ];
//           break;
//         case '5':
//           subjects = [
//             { name: 'Maths-1', playlistId: 'PLjm_mvBNlvBa7QyMk4rJ0QTKt05EJSWF1' },
//             { name: 'Civics', playlistId: 'PLjm_mvBNlvBY4TMHcbnFFDOcAtkCgOfpk' },
//             { name: 'Science', playlistId: 'PLjm_mvBNlvBYImIjBPzdIwRbI14u7XdAF' },
//           ];
//           break;
//         case '6':
//           subjects = [
//             { name: 'Maths-1', playlistId: 'PLjm_mvBNlvBa7QyMk4rJ0QTKt05EJSWF1' },
//             { name: 'Civics', playlistId: 'PLjm_mvBNlvBY4TMHcbnFFDOcAtkCgOfpk' },
//             { name: 'Science', playlistId: 'PLjm_mvBNlvBYImIjBPzdIwRbI14u7XdAF' },
//           ];
//           break;
//         case '7':
//           subjects = [
//             { name: 'Maths-1', playlistId: 'PLjm_mvBNlvBa7QyMk4rJ0QTKt05EJSWF1' },
//             { name: 'Civics', playlistId: 'PLjm_mvBNlvBY4TMHcbnFFDOcAtkCgOfpk' },
//             { name: 'Science', playlistId: 'PLjm_mvBNlvBYImIjBPzdIwRbI14u7XdAF' },
//           ];
//           break;
//         case '8':
//           subjects = [
//             { name: 'Maths-1', playlistId: 'PLjm_mvBNlvBa7QyMk4rJ0QTKt05EJSWF1' },
//             { name: 'Civics', playlistId: 'PLjm_mvBNlvBY4TMHcbnFFDOcAtkCgOfpk' },
//             { name: 'Science', playlistId: 'PLjm_mvBNlvBYImIjBPzdIwRbI14u7XdAF' },
//           ];
//           break;
//         case '9':
//           subjects = [
//             { name: 'Maths-1', playlistId: 'PLjm_mvBNlvBa7QyMk4rJ0QTKt05EJSWF1' },
//             { name: 'Civics', playlistId: 'PLjm_mvBNlvBY4TMHcbnFFDOcAtkCgOfpk' },
//             { name: 'Science', playlistId: 'PLjm_mvBNlvBYImIjBPzdIwRbI14u7XdAF' },
//           ];
//           break;
//         case '10':
//           subjects = [
//             { name: 'Maths-1', playlistId: 'PLjm_mvBNlvBa7QyMk4rJ0QTKt05EJSWF1' },
//             { name: 'Civics', playlistId: 'PLjm_mvBNlvBY4TMHcbnFFDOcAtkCgOfpk' },
//             { name: 'Science', playlistId: 'PLjm_mvBNlvBYImIjBPzdIwRbI14u7XdAF' },
//           ];
//           break;
//         // Add cases for other class numbers and their corresponding subjects and playlist IDs
//         default:
//           subjects = [{ name: 'Default Subject', playlistId: 'PLjm_mvBNlvBYImIjBPzdIwRbI14u7XdAF' }];
//           break;
//       }
  
//       const videosBySubject = [];
  
//       // Fetch video IDs for each subject playlist
//       for (let i = 0; i < subjects.length; i++) {
//         const { name, playlistId } = subjects[i];
//         const response = await fetch(
//           `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${playlistId}&key=AIzaSyBzO8ungopQiqS1GQmJtqlZYWRZP7Mbrzs`
//         );
//         const json = await response.json();
//         const videoIds = json.items.map((item) => item.contentDetails.videoId);
//         videosBySubject.push({ name, videoIds });
//       }
  
//       return res.status(200).json({
//         videosBySubject,
//       });
//     } else {
//       console.log('none');
//     }
//   };
  
//   export default handler;
