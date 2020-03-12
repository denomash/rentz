import React, { Fragment } from 'react';

import { Container, Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const SUBMIT_APPLICATION = gql`
  mutation submitApplication(
    $name: String!
    $email: String!
    $phoneNumber: String!
    $address: String!
    $zipCode: String!
  ) {
    submitApplication(
      name: $name
      email: $email
      phoneNumber: $phoneNumber
      address: $address
      zipCode: $zipCode
    ) {
      name
      email
      phoneNumber
      address
      zipCode
    }
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Must be greater than 3 characters';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required';
  } else if (
    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
      values.phoneNumber
    )
  ) {
    errors.phoneNumber = 'Invalid Phone Number';
  }

  return errors;
};

const App = () => {
  const [submitApplication, { data }] = useMutation(SUBMIT_APPLICATION);
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      zipCode: ''
    },
    validate,
    onSubmit: values => {
      submitApplication({ variables: { ...values } });
    }
  });
  return (
    <Fragment>
      <Container maxWidth="md">
        <Grid
          container
          direction="row-reverse"
          justify="center"
          alignItems="center"
        >
          <form className={classes.root} onSubmit={formik.handleSubmit}>
            <div>
              {/* Name */}

              <TextField
                error={formik.errors.name ? true : false}
                id="name"
                label="Name"
                multiline
                rowsMax="4"
                value={formik.values.name}
                onChange={formik.handleChange}
                variant="outlined"
                helperText={formik.errors.name ? formik.errors.name : ''}
              />

              {/* Email */}
              <TextField
                error={formik.errors.email ? true : false}
                id="email"
                label="Email"
                multiline
                rowsMax="4"
                value={formik.values.email}
                onChange={formik.handleChange}
                variant="outlined"
                helperText={formik.errors.email ? formik.errors.email : ''}
              />
            </div>

            <div>
              {/* Phone Number */}
              <TextField
                error={formik.errors.phoneNumber ? true : false}
                id="phoneNumber"
                label="Phone Number"
                multiline
                rowsMax="4"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                variant="outlined"
                helperText={
                  formik.errors.phoneNumber ? formik.errors.phoneNumber : ''
                }
              />

              {/* Address */}
              <TextField
                id="address"
                label="Address"
                multiline
                rowsMax="4"
                value={formik.values.address}
                onChange={formik.handleChange}
                variant="outlined"
              />

              {/* Zip Code */}
              <TextField
                id="zipCode"
                label="Zip Code"
                multiline
                rowsMax="4"
                value={formik.values.zipCode}
                onChange={formik.handleChange}
                variant="outlined"
              />
            </div>

            <div>
              <Button type="submit" variant="outlined" color="primary">
                Submit
              </Button>
            </div>
          </form>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default App;
