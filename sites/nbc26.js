const fetch = require('node-fetch');

module.exports = {
    name: "NBC26",
    url: "https://www.nbc26.com/account/manage-email-preferences",
    signup: (async (email, _encodedEmail) => {
        // NEWSLETTERS
        await fetch("https://api.ewscloud.com/prod/notifications/v1/wgba/contactlists/subscribe/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "authorization": "Token 09de6f3130469f80b9916b0aa568c6e92587b70a",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site"
            },
            "referrer": "https://www.nbc26.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"contactlist\":[\"8dd3e567-62dc-4aca-bc0c-9650de13aad4\",\"edac06c6-aa98-4904-98db-400d1d5fae99\",\"a08bacd6-657d-422b-a117-0af500a6ea7f\",\"81e98b4e-4158-4760-9031-9c2d9e50b666\",\"edfcc3c0-c337-4498-91e0-5d17690185a1\",\"a53cc146-456f-4b57-b0dd-d10956a79963\"]}",
            "method": "POST",
            "mode": "cors"
        })

        // WEATHER ALERTS
        await fetch("https://api.ewscloud.com/prod/notifications/v1/wgba/contactlists/subscribe/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "authorization": "Token 09de6f3130469f80b9916b0aa568c6e92587b70a",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site"
            },
            "referrer": "https://www.nbc26.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"contactlist\":[\"6eae0025-3b2f-4532-9b01-dbf89c8abdc9\",\"cf9f67c8-fd15-4d81-811b-2c496eaa8609\",\"29dc5440-a3dc-4292-aede-ed8220afc33c\",\"cf5dc483-2ffc-4a56-afeb-1b2706b226da\",\"c94672ed-9015-431a-822b-af0fb48e8d3d\",\"a398f1f9-68bc-46ab-8bce-cdf54287eb10\",\"bc201ada-55b4-4c3a-8b7d-72f50349c866\",\"b052bdcb-6f18-4b06-a709-061b3b8447db\",\"bff5d5a8-1c83-465a-b5e6-89f9beef25a2\",\"03950982-5f51-4ef9-b582-ea1ecbbcfa99\",\"f924c18b-7f34-4fe0-96fc-569bd0eaa82e\",\"35f77fd9-75fc-4a84-8f05-64a719b4d8a0\",\"64288cb8-2b48-47f1-b8a3-30e8c5e6225c\",\"b38bd67f-17af-4bb3-9ee1-ccaa247c4706\",\"b8ae2438-c8db-4c67-af9e-8f45026e66fd\",\"59df4643-c875-4a6b-870e-b481cf1524a6\",\"50aec8bc-2b47-4c37-ad63-b8412575f286\",\"40331008-1127-4de8-98a8-8f91bf6b84d2\",\"d6e6ecc5-a8a2-4039-8e7f-233fed8b55ac\",\"22614fe8-4180-4223-86e3-089a423acb61\",\"2e8819ad-670c-445d-8e78-ef03baa9b995\"]}",
            "method": "POST",
            "mode": "cors"
        })

        return true;

        await fetch("https://api.ewscloud.com/prod/notifications/v1/wgba/contactlists/subscribe/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "authorization": "Token 09de6f3130469f80b9916b0aa568c6e92587b70a",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site"
            },
            "referrer": "https://www.nbc26.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"contactlist\":[\"26d98767-02f9-4fd2-9ed2-ee7cbb699e7d\",\"35f3a175-83d1-4b3e-bbee-0527cfb449b6\",\"f795e52a-dcbe-433c-a45f-06d9e519438d\",\"517b60ea-4cd3-49a6-8b56-5d750eb0d629\",\"5d40ad71-7311-4b13-8d14-0719dbeaa8ad\",\"aa9da356-f63a-4de2-90ea-5b193197fe5f\",\"f853a500-145f-44e7-93b2-3b38874dbba1\",\"0f2a27aa-3db0-420f-ae8a-d4f7bdeed040\",\"fb25bf1a-a075-4fd7-bf72-e00d8283e7ac\",\"95631a23-a5e7-4394-8831-7c74659c1c7f\",\"a166437a-0936-4cfe-91ce-14e7b0ec1f76\",\"43c983c9-629a-4fc3-a9ab-fb124eb47258\",\"10603a15-1a15-4f6b-8d74-ffca25375309\",\"3d42318e-a915-486f-ae1d-938732174fb4\",\"dafba274-0cd7-4313-943e-428f98bd9ac5\",\"2999a883-bd70-45a3-83ea-4ae31a175421\",\"1efdb71d-b6b8-420a-ac08-29b4676756f5\",\"bb67ab7f-affe-45bc-b973-9a85bda45cba\",\"9b3896b6-3fd7-4ae0-b3c7-0c44ade6d594\",\"86deac4b-1992-4409-bcac-a4e4946d3880\",\"bfb136a4-d66a-47e9-83ef-8764370b728b\",\"689ed3a4-00dd-434f-949a-06c58c230cc3\",\"218eb22c-6fb3-4c2f-b3dc-3bb057bd33e6\",\"10663ae9-5328-456c-9f82-b0ced5ad3d6e\",\"fd9f88c2-5a89-4993-81bd-502204d7dcd0\",\"08b79753-463d-455d-8ab9-31bca0c5a1b1\",\"f8a4392c-38b8-4cd3-b4a7-c082e0c26933\",\"0bda63d9-209d-42f4-a14a-78ce59ead862\",\"774db91f-59b9-46aa-a25c-1f9988f3f28a\",\"218aeca8-33b6-45a7-812c-b626d7edbd0e\",\"0c2960eb-92f6-4827-9a8f-170073a12075\",\"7baecbd2-8348-4e56-b11d-9151b94b2e7a\",\"4c868bae-4377-4d6c-b89e-b88a1e83708d\",\"0a2ed6ab-0a13-4050-970c-0184b6ce88c7\",\"ce3a9131-9cd8-4992-9fc8-db00a6707310\",\"49ba63e6-d573-4cb3-b37c-1809a26bd10f\",\"7766f225-dc1b-4e64-9e53-f8fb139e749c\",\"9e005d8b-53b2-44d0-8460-ef29b815aa5e\",\"068aac4d-a48f-45fc-a68d-977f403d3bd0\",\"c3160ce3-db28-4bcc-b38f-8f80b07f9cee\",\"ddb58de2-fcdc-4ffb-85c1-861b29d6641a\",\"3ebc3d5d-df9a-4489-8ebc-4e579999f092\",\"4cf3e928-3422-45b5-9808-7fe05504d7c4\",\"9f73d553-06a8-4480-a51b-93192d677e60\",\"8bd23861-9b30-498b-98bf-b131a2032749\",\"c4321afa-bc3b-4d3a-a180-6302d8a6badd\",\"3dec5bb6-d53d-4ca4-812b-5d740de3dfe6\",\"eaccaf6e-c2c5-4405-bada-219837c5b6b9\",\"a6265d8b-e694-4032-b103-bc32dcce333c\",\"45c20419-6495-470c-ba44-1f64ff66f955\",\"1edc4e74-1ad8-4855-9f84-137517fece01\",\"982af122-ada3-47e4-8343-48426d43fff1\",\"c4d4cccf-bada-4ab3-9e0f-e5413a72d317\",\"bb09a905-e204-4136-affb-756cdb62ba6b\",\"ef51e5fd-6c45-4c44-a85d-2b560a83133d\",\"68d8e321-39dd-4c9f-af44-0cb80ad909e1\",\"ac31523c-e71e-4d21-8d11-3b11c09f15f9\",\"18d36080-abd0-4a2a-b004-d732ce89baaa\",\"9bc786a2-93f3-4c6c-b31c-94647da2dd0f\",\"09bfedfb-d70e-4961-b77e-ca2e23d5a722\",\"acb59622-5a7d-4b30-8ef2-d6dba9206f9f\",\"2e270cbe-069c-4f31-bed8-3eb73673109e\",\"62efb6ee-b946-4e77-9fec-2749d0dac0b4\",\"786e0864-0bd0-48ea-8d84-fe4233572a25\",\"15722d8d-d217-4c1e-9b02-b987d7f40061\",\"cfe512d8-d198-4601-9bab-cb8d215df59d\",\"0071d01e-d71d-4ebb-9344-1b67d26e94c5\",\"0ca6005c-b8f2-4147-804f-960ce761171e\",\"fe8e5587-3518-4dcf-b528-8036c0aa2071\",\"20cb3d6b-8b00-4a03-85e7-a80228bfd1f9\",\"96e3dec8-a5a8-4378-8d3f-1963e4c4ed24\",\"ccf74b5f-96ef-4206-9a5b-ed73719110f3\",\"ab2c2fe2-ab54-4e42-a651-ee12f7d28e4a\",\"29f1c08b-a8ea-4629-b223-6e582418a066\",\"b19d96e7-037b-4b5b-a6d3-e69632ea8c60\",\"9afd7f23-5bd9-4d22-a218-4254257cfde5\",\"10b30fbc-7b3d-41c6-87b9-4a0e2ca30732\",\"5feed7c4-2afd-45ca-9c16-c4ea703c791f\",\"6b64cf43-effa-4ecb-920a-635ce2fc3221\",\"415c793a-0353-4e27-b16e-af49cb798512\",\"388a7074-5008-47c2-845a-ad75ea1d5d2d\",\"046d6a35-a50c-4df9-9e1d-a92bef0936a0\",\"86eea497-df3e-4772-bd1c-96fcb4a9ac4f\",\"95687af0-ebaa-4d4e-aa42-abd608430a77\",\"cbce3f41-c6c5-47bf-9555-265d6a593647\",\"6b83df67-7ff2-431e-8c8c-a1715c60f4cf\",\"58998e61-df43-4bb5-a023-ba023ab7bfae\",\"a19cf0e8-8b45-49ff-aff1-209e54361fd8\",\"076bc33a-a92d-4cd3-be81-0e11e9ef3098\",\"7fbbf747-e342-4746-b1fd-c505d31112bc\",\"c4ce2824-7bab-48da-a970-c5ee65f13bcc\",\"3ff7e674-1d7a-4a11-af31-20d866f506e5\",\"792bf17e-69ff-4d3b-8a86-16d6e0dbc6ba\",\"0d86d15c-e559-48cb-8e30-a4864d9fac7c\",\"45ea915c-97e5-45b8-8dc1-173f8a3bea61\",\"9948a545-9624-4682-9aa4-8145da1461b0\",\"9eb8aba0-aef0-4af5-afcb-ebcc50bc8cd5\",\"20b2b23c-74ab-4426-a886-496b1a2b5764\",\"114d95db-391b-4b00-b6fa-79eb4f360d58\",\"f68be06d-a1f9-4e8f-816d-f1937ebd9568\",\"cc78aa19-debb-4ba9-81a9-b679bf8b8259\",\"1c2236e9-8b36-4847-a1f6-4c9688d55acf\",\"becdaece-e17a-4e32-8ea2-0a21fe628ee2\",\"522d2149-b271-431a-bf1a-943e26b687b6\",\"4af85547-ec43-4c93-9c26-530a96a082b3\",\"f6216cc3-5af7-41eb-8230-7a8caac4682a\",\"7706d7b4-5e51-4d68-893f-0e45861dd0ff\",\"ace2c1ac-8043-412b-8c28-c80d6297e7bb\",\"a032cac4-22b5-4cad-93c8-f9a11f1c7600\",\"6160a425-3923-417a-a249-82b694a6a287\",\"d15eed8d-bb84-47c4-a41e-32ad8f8ed760\",\"650465bb-5b93-47ae-9251-185d051bf903\",\"07627ffa-f0a5-4a42-8c85-596d84b3865f\",\"46a4579f-d877-4d82-8b80-b43d0f02368b\",\"2526d338-38a7-43af-8b32-f107b7927a3f\",\"9ec17276-0b75-48d4-9437-2f62eb2f36e9\",\"54003270-3330-465b-be3d-3f40c7ac28a4\",\"88f4d013-3d90-40b5-8d67-a02d8737cfbd\",\"0300bb29-ec50-4383-93b6-4df42c77ca0a\",\"04398931-a81e-423e-a042-473dbca24606\",\"7474ed05-a4a7-418f-bc97-2be962702acf\",\"8286a2bc-51de-4ca2-b397-46f05e6db13a\",\"7c1de0cb-0b58-48a9-9e3f-baae5c6302b4\",\"1aac8253-bdfb-40e7-8790-7cd7116d4d29\",\"8bded60a-ef90-4f3d-85c0-cee12662c83d\",\"deef765a-0d64-441d-b4da-ae76aa66afd3\",\"4ccd5b8c-cff8-4f81-b6af-47a32c87e28c\",\"c647d5c9-c7a1-4b15-86de-73032188a712\",\"5fd9de62-63d0-4eae-9d87-4b1f7d701304\",\"fa0c2255-2f15-4f94-9a7a-43e68d9870af\",\"3e9bfe63-a629-4b11-b746-ea644fe76882\",\"762fc626-a664-4edf-8d50-192ba2f67ab0\",\"02bf6586-5b16-4f92-8c39-58d3de885ccc\",\"f05e7fe5-63f9-448b-97a4-dd0b88855cd3\"]}",
            "method": "POST",
            "mode": "cors"
        });
    })
}