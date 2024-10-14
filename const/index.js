const status = {
  open:'open',
  deleted:'deleted',
}

const userStatus = {
  pending: 'pending',
  active: 'active',
}

const privateKey = '-----BEGIN RSA PRIVATE KEY-----\n'+
'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\n'+
'-----END RSA PRIVATE KEY-----'

const publicKey = '-----BEGIN PUBLIC KEY-----\n'+
'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAslMKCo7WI1GOceN8TDvo\n'+
'3Q7ZEzksoKRy3EOdxb+xsCuG+5AV0obM9qdzCTk/O+a1p9FRUueTM3kqz69TniIl\n'+
'YI+GtsSndnrx3X+hoYRqiKfkmIwOt+V5whopFV33CDeuAe2BDJ8aICwKsDeosbxa\n'+
'1pFiGc2dPFaGQhzW7uaVQ2IdPecz1KZmew7voyUJCBT1L+9KlICnwH0kylIx65xW\n'+
'MLgtag3PhTFA535xkpnJIaQHu2DyDNTrCh3mU8VmRkjMJaeUWyaxCHhoXEO1Z0Vt\n'+
'y949c3V+ZMzVgfPx6lls0Xr14citEjhvE2Mo315PgHRi2fW9g60Y/Sqy3+yrBY79\n'+
'+OZQJF0JPglJo2UTP9IzM9sX0WHODfVZSz/1kYKz9MBZ/GVYrY5/z5pI6LbuVM8R\n'+
'DP3cRNGSa2B6KQ/+2wdnf9cEoovJWhHtweccqgjVO8soSK6Ox4xS3s+sBo2MyQYo\n'+
'8pDY/zdCXxEBvR17Z1U8FjYydf4ECYD/bt2sZrn/C7P9vWUwgqACt6X2W6wIbFbF\n'+
'zUnIN7gtce889/yAyxGLv3CtUtbykPefGw6SIScRj/CrkFAa+zA1eV4hY+T8PzdH\n'+
'CF0iH5f5Zyx4dgxVRto8K+J2bZWQhk7NfwUCKwihRo12cD5G6x7QT33Iwh4vCgay\n'+
'FfMGQMqG29w1swiSrmSZ3oECAwEAAQ==\n'+
'-----END PUBLIC KEY-----'

export {
  status,
  userStatus,
  privateKey,
  publicKey,
}