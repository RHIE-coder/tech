# CSR(Certificate Signing Request)

인증서 서명 요청. 인증서 발급을 위한 필요한 정보를 답고 있는 인증서 신청 형식 데이터.

`공개키`와 인증서에 적용될 `도메인 관련 정보`

실험실: https://www.anycert.co.kr/extra_svc/csr_setup#csr

## Example

### - DOMAIN

```
국가: 대한민국
도/시: 서울시
군/구: 양평구
회사명: 헬로우
부서명: 월드팀
도메인: hello-world.net
패스워드: 123123
이메일: test@example.com
```
### - ENCRYPTED PRIVATE KEY CODE
```
-----BEGIN ENCRYPTED PRIVATE KEY-----
MIIFHDBOBgkqhkiG9w0BBQ0wQTApBgkqhkiG9w0BBQwwHAQISQW+9K1C2PACAggA
MAwGCCqGSIb3DQIJBQAwFAYIKoZIhvcNAwcECJKXc8xT12sXBIIEyDb8BoLqKIic
qQUrhk5wA4BqC6JeQztEiQfUp13tfMmK4pfzXHKskPqMF4uC1J2aUWF4FmXbJDvW
UrGEQU5NPQPAAD5HULMxy2VxQeJpH41wxMTTAZHc72CXPL/61sqUytG4d2rNkvwS
rpsXV1iwf433egsk7+jrTVhcNdNtV/15mYaSWPTZ3+cFOMIBNzO341BO7uH/FiZj
b4nvfhTEt9Y/feM6y6H84vPtMOFF/LQb03Z99p6rfBFAcibjX5fIm4QNJ/Np/ohY
ESUR6x0jigUQ84xRTXPO8o+o2KWf3DxWXDZxkQdCYALIK7KuHxdlt0YdL3ZAVFtC
qgLphX6PIBdLo11tv8/Z9KBqdl2WUstmMH2KyNz1Q/NidKCPY9PojOscLZdiTpqs
ivaFZr5V+wrda0L7Doo8h9oOC37jPSRDboWJB8oIw6hn8PqkkD7gpMShKNNIJOUj
ygFMzK6lr5VbPGSZ+0AQYLc758Srm2or8XUtoFbiQ4VfK90H8rua45aHO8eHgzTx
QD+E1KmVWlEA2ttNJdaMOG2HqXV0xPfcECVcfVdVVIzzgUy60fgDQV/cNMuS/uMH
FAARHK00y0dxo9rHNyyVEdJZAOcSsfG47CTNdiumo7vDwoY7gU1P8dESyqSDXiMJ
RN1d9cXQ0UihGNqijfYSARoDGGDRya978Z68uFKWvV50yGOB5Egu+dx9MAIdxfb3
QAXF0OInXGWSEbefpRDcmIy7nTmzdLSUEPvmW2eOUgQ7cYMfiItrNg1CazB6lnT5
DfHvPAGN9YyA/77J+mTia+PaND7ZOucMxlwH0v8bW/v7QR48kuUXRJUSoh9gtnFD
b+nUXmnwpvAjzF392KcPDz/y6hW4ccF01+pVtgknx3y2Z+p6GMgsnl0/j9q0WMI3
8841yS4SSO5ezaEQHRDtR64nZnhnuupLSrrzOGzp1muXTIY6T7o+E5uDCESfgXs0
3WrELaH6jckCWWEjgJmfcEx5q7FhetQgTvZbZ3bpLAMA56UD6Iwi82YI1lFs+Gry
EtZbSWucfPzCu94Np2eEpyp4+1ubpxWDGZrqomtBHUqPNdbTdhuEaS5ZfjvNCIID
A/R1Kcl0jZY+ksp9qUURgcHgd4tfv1Q+c9OmCayEbaR6ZVtgIXg2mDQwtLrToueI
WI94+nhdf/wrRO2IvFwKZc2mz6vcomRy45fnYnsxzFyN21/X27dh4yg0IPbP2CfJ
sWY4ek/Dm2gii2RvIeUDd3cXxUbIKUOBfdgEbg/0hnjAj15FVW6FzzZK/3KOol98
VnH7TYuGDR2TBniyLx9the0VPtyuUzlDkPBMsis/2QJar9ejQiBAXwHMn7dhsEhu
iqMCRr50uhN+tyr2bYwK9DfSdZrUkWdkfguJio4iyAnalAZW1zrpXMjZIFFtZOLE
Lms+Zb3ICl3eEAfGfMn5X6bOlGi1LAGJaUa4TnSMJox/DO0kOJV1TI6yq0xpoAnc
KeyKSWGaTXOJY7Cipdn/Vb0NNDEU+8IQq1cRLntphTBrF9TivIuPE4a1x9djAPiO
YEraW546UKKPk27s6a9zXKb+DzSjY1wBKDiP6SNrxQibc8sCCs51yRgpqhUkFDfB
ZfkLtQUDASmEVKvxgDoU+g==
-----END ENCRYPTED PRIVATE KEY-----
```

### - CSR CERTIFICATE CODE
```
-----BEGIN CERTIFICATE REQUEST-----
MIIC3zCCAccCAQAwgZkxCzAJBgNVBAYTAktSMRIwEAYDVQQIDAnshJzsmrjsi5wx
EjAQBgNVBAcMCeyWke2Pieq1rDESMBAGA1UECgwJ7Zes66Gc7JqwMRMwEQYDVQQL
DAoI7JuU65Oc7YyAMRgwFgYDVQQDDA9oZWxsby13b3JsZC5uZXQxHzAdBgkqhkiG
9w0BCQEWEHRlc3RAZXhhbXBsZS5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
ggEKAoIBAQCT4XirLsJQMe/m13jujb1J8heBJFHcgRUdmup5qhZDDwlWnmjdADjc
tAkcn28+q+CLNKpx9rs2qgzzrspAG71YtCSILfm9zu2JpAIn0uQCyEzaqjNolffE
qkGP5QojNQpF6GYDVJqH5LGqL2F60eqX3CLWf+yfhIlaektPQXp+L9oCi/OJOaVH
Q/gzFUIMZAypn6pb/K9FaIWf6+DQFZguds3dgp6i70Dz8JkaOPjtclk1PNzBJ08y
1t8zOCfpAc1PmemX6qEatn3G9EEPOaUZC88bOmcfeEFcL3SrNWIPRL1GDIHuRClI
aTpMUAO8n6+wSv+HXRuDgEt53Or9K4hBAgMBAAGgADANBgkqhkiG9w0BAQUFAAOC
AQEAdC6Pg59bzL5oI/c/Dgd2W4JHdkak4kZjXDrTNq2MJonRU3tyhkIg38k/ar9y
WKkG9o+EH0hyr0Cml+5CRdfzQle/WT7vXSZnmuzljMHd930ZYNIesHYJIINoG308
2wW1bFv2mqFb8yumM1XS4YL0ighmGKbJ3ZMadjfvT/oCQxk+i2ohJ7KtulJnlXhd
HUCaZtdKedJoCX0DWx/2yyKd75xezY5Yw+wix5q7ySTAIAXcDOuR+yFjWzJEg9aa
Jh2xCyreaYIYRXzn4zHcctnxxgfrJvXuIh+K4Nmj5RNaQ5Emqj8IP3w6AoqgdaIn
A3iheb+81eLbFFmIxUQNkHbrjg==
-----END CERTIFICATE REQUEST-----
```

