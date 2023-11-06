import { gql } from '@apollo/client'

const FORM_GLOBAL = gql`
  mutation ($input: SubmitGfFormInput!) {
    submitGfForm(input: $input) {
      entry {
        id
      }
      errors {
        message
      }
    }
  }
`

export { FORM_GLOBAL }
