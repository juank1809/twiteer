import { Verifier } from '@pact-foundation/pact';
import path from 'path';
import express from 'express';
import tweetsController from './tweets.controller';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/tweets', tweetsController);

const server = app.listen(8080);

describe("Tweets pact verification", () => {
    it("validates the expectations of TweetService", () => {
        const opts = {
            providerBaseUrl: 'http://localhost:8080',
            provider: 'ProductService',
            providerVersion: "1.0.0",
            pactUrls: [ 
                path.resolve(__dirname, '../../../../twitter-ui/pacts/twitter-ui-mock-service.json')
            ]
        }
        return new Verifier(opts).verifyProvider().then((output) => {
            console.log(output)
        }).finally(() => {
            server.close();
        })
    })
})