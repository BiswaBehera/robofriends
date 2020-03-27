import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {

    return (
        <div>
            {
                robots.map( robot => {
                    return (
                        <Card
                            key={robot.id}
                            id={robot.id}
                            name={robot.name}
                            email={robot.email}
                        />    
                    );
                })
            }
        </div>
    );

};

export default CardList;

// const CardList = ({robots}) => {

//     const cardArray = robots.map((user, i) => {
//         return (
//             <Card
//              key={robots[i].id} 
//              id={robots[i].id} 
//              name={robots[i].name} 
//              email={robots[i].email} 
//             />);
//     });
//     return (
//         <div>
//             {cardArray}
//         </div>
//     );
// };
