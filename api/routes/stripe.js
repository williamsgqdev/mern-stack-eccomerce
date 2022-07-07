const router = require("express").Router();

const stripe = require("stripe")(
  "sk_test_51JsUiRGT4k8dBCuXqKwqYriSbihOKDMgzpas7LLTEbfyyy6U0IPSJr02zN6Vuf1ekwnJknPcxgqV1O1TJ7SMHYwZ00UvUY0QwG"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
