import React from "react";

export default function AuthorItems({currentItems}) {

    return(
        <>
            {currentItems.map((author, index) => (
                <tr key={index}>
                    <td className="author-cell">
                        <img src={author.avatar} alt={author.name} />
                        <div>
<<<<<<< HEAD
                            <div className="name">{`${author.firstName} ${author.lastName}`}</div>
=======
                            <div className="name">{author.name}</div>
>>>>>>> 430932a (TopBar)
                            <div className="email">{author.email}</div>
                        </div>
                    </td>
                    <td>
<<<<<<< HEAD
                        <div className="role">{author.title}</div>
=======
                        <div className="role">{author.role}</div>
>>>>>>> 430932a (TopBar)
                        <div className="team">{author.team}</div>
                    </td>
                    <td>
                <span className={`status ${author.status}`}>
                  {author.status.toUpperCase()}
                </span>
                    </td>
                    <td>{author.date}</td>
                    <td>
                        <button className="edit-btn">Edit</button>
                        <button className="edit-btn">Delete</button>
                        <button className="edit-btn">Reset Password</button>
                    </td>
                </tr>
            ))}
        </>
    )
}