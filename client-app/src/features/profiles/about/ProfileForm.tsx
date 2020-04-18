import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Field, Form as FinalForm } from 'react-final-form';
import TextInput from '../../../../app/common/form/TextInput';
import TextAreaInput from '../../../../app/common/form/TextAreaInput';
import { Button, Form, Grid } from 'semantic-ui-react';
import { combineValidators, isRequired} from 'revalidate';
import { RootStoreContext } from '../../../../app/stores/rootStore';
import { IProfileFormValues } from '../../../../app/models/profile';
import { FORM_ERROR } from 'final-form';
import { ErrorMessage } from '../../../../app/common/form/ErrorMessage';

const validate = combineValidators({
    displayName: isRequired({ message: 'Display name is required' })
})



const ProfileForm = () => {
    const rootStore = useContext(RootStoreContext);
    const{editProfile} = rootStore.profileStore;

    const [loading] = useState(false);
    return (
        <Grid container columns={1} stackable>
            <Grid.Column style={{ marginRight: "auto", marginLeft: "auto" }}>
            <FinalForm
            onSubmit={(values: IProfileFormValues) => {
                editProfile(values);
                
            }}
            validate={validate}
            render={({ handleSubmit, submitting, submitError, invalid, pristine, dirtySinceLastSubmit }) => (
                <Form onSubmit={handleSubmit} error>
                    <Field
                        name='displayName'
                        component={TextInput}
                        placeholder='Display Name'
                    />
                    <Field
                        name='bio'
                        component={TextAreaInput}
                        placeholder='Bio'
                        row={2}
                    />
               
                    {submitError && !dirtySinceLastSubmit && (
                        <ErrorMessage
                            error={submitError}
                        />
                    )}
                    <Button 
                    disabled={invalid && (!dirtySinceLastSubmit || pristine)}
                    floated='right'
                    positive
                    loading={submitting}  
                    content='Update Profile' />
                </Form>
            )}
        />
            </Grid.Column>
        </Grid>
    )
}


export default observer(ProfileForm);
