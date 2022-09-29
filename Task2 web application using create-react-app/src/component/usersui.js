import React from 'react'

const Usersui = ({users}) => {
  return (
    <>
        <div className="row">
            {
                users.map((current, index) => {
                    return (
                        <div className="card column" key={index}>
                            <img src={current.avatar} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">
                                    {current.first_name} {current.last_name}
                                </h3>
                                <h4 className="card-text">{current.email}</h4>
                            </div>
                        </div>
                    );
                })
            }        
        </div> 
    </>
  )
}

export default Usersui;
