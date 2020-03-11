import React from 'react';

import './style.css';

function DevItem({value}) {

    return (
        <li className="dev-item">
            <header>
                <img src={value.avatar_url} alt={value.name} />
                <div className="user-info">
                    <strong>{value.name}</strong>
                    <span>{value.techs.join(', ')}</span>
                </div>
            </header>
            <p>{value.bio}</p>
            <a href={`https://github.com/${value.github_username}`}>Acessar perfil no Github</a>
        </li>
    );
}

export default DevItem;