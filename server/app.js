require("dotenv").config();// this is used for credencial
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const PORT = 6005;
const session = require("express-session");
const passport = requirGOCSPX - tsxccxpeHS8fvTvZggonNfxkq1wJe("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./model/userSchema");


const clientid = process.env.CLIENTID;
const clientsecret = process.env.CLIENTSECRET;


app.use(cors({
    origin: "http://localhost:3000/",
    methods: "GET, POST, PUT, DELETE",
    credentials: true
}));


app.use(express.json());

//setup session 

app.use(session({ // jab bhi hum google login karenge tab ye ek increapted form me ek  id create karega wo hogi session id aur jab us id ko decode karenge to vaha se hame user ka pura data milega 

    secret: "1234kfngkgndffnvvgr",
    resave: false,
    saveUninitialized: true
}))


// setuppassport

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2Strategy({
        clientID: clientid,
        clientSecret: clientsecret,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"]
    }, async (accessToken, refreshToken, profile, done) => {
        console.log("profile", profile);
        try {
            let user = await userdb.findOne({ googleId: profile.id });
            if (!user) {
                user = new userdb({
                    googleId: profile.id,
                    displayName: profile.displayName,
                    email: profile.emails[0].value,
                    image: profile.photos[0].value
                });
                await user.save();
            }
            return done(null, user);

        } catch (error) {
            return done(error, null)
        }
    })
)

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
});

//initial google oauth login 
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect: "http://localhost:3001/dashboard",
    failureRedirect: "http://localhost:3001/login"
}))

//get response 
// app.get("/", (req, res) => {
//     res.status(200).json("server start")
// });

//server start
app.listen(PORT, () => {
    console.log(`server start at port no ${PORT}`)
}); 