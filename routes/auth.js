const router = require('express').Router()

router.get('/', (req, res) => {
  res.header('Content-Type', 'text/html')
  res.send(
    `Welcome
      POST /tutor to create a new tutor with no Admin rights. You'll be given a token, save it, as you'll use that to
        perform other "tutor-level" actions.

      GET /tutor to return all the registered tutor with their unique id, can only be done with the necessary token

      GET /tutor/:id to get a tutor with a particular id, can only be done with the necessary token

      POST /subject to create a subject with a "primary", "JSS" or "SSS" category

      GET /subject to view all subjects

      GET /subject/:category to get all subject in a particular category, for example, /subject/primary

      

    `
  )
})

module.exports = router;