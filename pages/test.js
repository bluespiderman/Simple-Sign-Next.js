import { GoogleAdsApi } from 'google-ads-api';
import { useEffect, useState } from 'react';

const TestPage = () => {
    const [resp, setResp] = useState({});

    useEffect(() => {

        const client = new GoogleAdsApi({
            client_id: '925107371599-i1a7luq2jhgo04gom6m1go7vpflpdvui.apps.googleusercontent.com',
            client_secret: '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',
            developer_token: 'Hg72btIzb_bAKue4PC74AQ',
        });

        client.service('customers').get().then(res => {
            setResp(res);
            console.log(res);
        });
    }, []);

    return (
        <div>
            {
                JSON.stringify(resp)
            }
        </div>
    );
};

export default TestPage;