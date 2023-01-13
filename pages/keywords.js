//import axios from 'axios';
import { useState } from 'react';
import Layout from '../components/Layout';

function Keywords() {

    const [keyword, setKeyword] = useState('');

    // const findNewKeywords = (e) => {
    //     e.preventDefault();

    //     axios.post('https://googleads.googleapis.com/v12/customers/9590175125:generateKeywordIdeas?key=ya29.a0AX9GBdVnjr7qIG3_WsEWacBvW5OvuRH5PIqcY4_3NO-nAlTVikQPT1zjYDkrtfNItjhrSUP6umu7vZE1VEfWdsb9oQXN6vS8ievf-WU95E5rENzoE2Ld_Y83zdavoYm7909U_hr2eOFQLQnwWyYaN9Jn75TyaCgYKAWQSARESFQHUCsbCM-T5qMlOBikyXE_6NCepoQ0163', { keyword }).then(
    //         (response) => {
    //             console.log('keywords', response.data);
    //         })
    //         .catch((err) => {
    //             throw new Error(err);
    //         });
    // };
    // https://www.google.com/complete/search?q=api
    const googleCloud = {
        // apiKey: '&cp=3&client=gws-wiz-serp&xssi=t&hl=en-RU&authuser=0&pq=api&psi=5OfBY7GPMsz4qwH8y6PQDw.1673637824722&dpr=0.8999999761581421',
        api: `https://www.google.com/complete/search?q=${keyword}&cp=3&client=gws-wiz-serp&xssi=t&hl=en-RU&authuser=0&pq=api&psi=5OfBY7GPMsz4qwH8y6PQDw.1673637824722&dpr=0.8999999761581421`,
    };

    async function findNewKeywords() {
        let url = googleCloud.api;
        console.log('url', url);
        await fetch(url, {
            method: 'GET'
        }).then((res) => res.json())
            .then((data) => {
                console.log('data', data);
            })
            .catch((err) => {
                console.log('Error');
                console.log('error : ', err);
            });
    }

    return (
        <div className='container' style={{ width: '80% ' }}>
            <Layout title="Sign In">
                <h3 className="title is-3">You Just Put in Keywords</h3>
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input
                            className="input"
                            type="text"
                            name="keyword"
                            placeholder="keyword"
                            value={keyword}
                            onChange={(e) => { setKeyword(e.target.value); }}
                            required
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope" />
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check" />
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-text-centered">
                        <button type="submit" className="button is-success" onClick={(e) => { e.preventDefault(); findNewKeywords(); }}>
                            Start
                        </button>
                    </p>
                </div>
            </Layout>
        </div>
    );
}

export default Keywords;
