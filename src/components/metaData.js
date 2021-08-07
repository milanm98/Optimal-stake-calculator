import {Helmet} from 'react-helmet';

function MetaData(){
    return(
        <Helmet>
            <title>App Title</title>
            <meta name="description" content="App Description" />
            <meta name="theme-color" content="#008f68" />
        </Helmet>
    )
}

export default MetaData;