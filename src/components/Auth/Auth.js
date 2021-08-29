import { useState } from 'react'
import { Container, Paper, Avatar, Typography, Grid, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import useStyles from './styles'
import Input from './Input'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Auth = () => {
  const classes = useStyles()
  const [isSignup, setIsSignup] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState(initialState)

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  const handleShowPassword = () => setShowPassword(!showPassword)

  const switchMode = () => {
    setForm(initialState)
    setIsSignup((prevIsSignup) => !prevIsSignup)
    setShowPassword(false)
  }

  return (
    <Container component="main" maxWidth="xs" >
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
              <>
                <Input name="firstname" label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="lastname" label="Last Name" handleChange={handleChange} half />
              </>
            )}

            <Input name="email" label="Email adress" handleChange={handleChange} type="email" />
            <Input 
              name="password" 
              label="Password" 
              handleChange={handleChange} 
              type={ showPassword ? 'text' : 'password' } 
              handleShowPassword={handleShowPassword}
            />

            {
              isSignup && (
                <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
              )
            }
          </Grid>

          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
