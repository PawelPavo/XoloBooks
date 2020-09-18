import * as dotenv from 'dotenv';

const envFound = dotenv.config();

if(!envFound){
    throw new Error ('Cannot locate the env file!');
}

export default{

};