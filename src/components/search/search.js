import React, {useContext, useState} from 'react';
import {AlertContext} from "../../context/alert/alertContext";
import {GithubContext} from "../../context/github/githubContext";

const Search = () => {
    const [value, setValue] = useState('');
    const {show, hide} = useContext(AlertContext);
    const github = useContext(GithubContext);

    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            return
        }

        if (value.trim()) {
            console.log('Make request with: ' + value);
            github.search(value.trim());
            hide();
        } else {
            github.clearUsers();
            show("Введите имя пользователя");
        }
    };

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя"
                onKeyPress={onSubmit}
                value={value}
                onChange={event => setValue(event.target.value)}
            />

        </div>
    );
};

export default Search;
