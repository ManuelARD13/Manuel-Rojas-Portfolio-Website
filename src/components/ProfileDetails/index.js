import React from "react"

import "./ProfileDetails.css"

function ProfileDetails({ profileData }){
    console.log(profileData)
   
    return (
        <div >
            <ul className="detailsContainer">
                <li key={profileData.personalData.name}><strong>Name:</strong> {profileData.personalData.name}</li>
                <li key={profileData.personalData.age}><strong>Age:</strong> {profileData.personalData.age}</li>
                <li key={profileData.personalData.phone}><strong>Phone:</strong> {profileData.personalData.phone}</li>
                <li key={profileData.personalData.email}><strong>Email:</strong> {profileData.personalData.email}</li>
                <li key={profileData.personalData.address}><strong>Address:</strong> {profileData.personalData.address}</li>
                <li key={profileData.personalData.freelance}><strong>Freelance:</strong> {profileData.personalData.freelance}</li>
                <li key={profileData.personalData.github}><strong>Github:</strong> {profileData.personalData.github}</li>
            </ul>
        </div>
    )
}

export { ProfileDetails }
