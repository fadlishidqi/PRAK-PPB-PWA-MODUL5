// src/pages/Profile.js

import React from 'react';
import './Profile.css';

const Profile = () => {
  const profileData = {
    name: "Gojo Sitorus",
    username: "@bocah_toko",
    bio: "Passionate reader and aspiring writer. Love to explore new worlds through books.",
    avatar: "https://firebasestorage.googleapis.com/v0/b/seputipy.appspot.com/o/covers%2Fanimek.jpg?alt=media&",
    stats: {
      booksRead: 42,
      following: 120,
      followers: 85
    },
    favoriteGenres: ["Science Fiction", "Mystery", "Classic Literature"]
  };

  const groupMembers = [
    {
      name: "Fadli Shidqi Firdaus",
      id: "21120122140166",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQEVYA-wtdf9qw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1721482236579?e=1733356800&v=beta&t=k1jKNUZ0rQgBDli0UTSQH9Dr6S9iRTvtxVGTLTYJYbg"
    },
    {
      name: "Mutiara Sabrina R",
      id: "21120122140177",
      avatar: "https://media.licdn.com/dms/image/v2/D5635AQEAySbngwwftA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1725991586422?e=1728622800&v=beta&t=Ft27sxEWpt0N8zVqcqGZpxszjGn4HEmiGDnqAFOMCL0"
    },
    {
      name: "Aditya Putra Efendi",
      id: "21120122140188",
      avatar: "https://i.pinimg.com/280x280_RS/d0/a2/72/d0a2721b506c303e61094f2c0fbaf802.jpg"
    },
    {
      name: "Rizky Ananta Fadhila",
      id: "21120122140199",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFJ8BJ9t_V4LA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715779872885?e=1733356800&v=beta&t=D169IEQ34iYfBghTbHUTHgLbmzWnH3rsEfIRLGWuDPs"
    }
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={profileData.avatar} alt="Profile" className="profile-avatar" />
        <h1>{profileData.name}</h1>
        <p className="username">{profileData.username}</p>
        <p className="bio">{profileData.bio}</p>
      </div>

      <div className="favorite-genres">
        <h2>Favorite Genres</h2>
        <ul>
          {profileData.favoriteGenres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>

      <div className="group-members">
        <h2>Group Member</h2>
        {groupMembers.map((member, index) => (
          <div key={index} className="member-item">
            <img src={member.avatar} alt={member.name} className="member-avatar" />
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-id">{member.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
