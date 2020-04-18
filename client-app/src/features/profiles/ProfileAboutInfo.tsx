import React, { useState } from 'react'
import { Tab, Grid, GridColumn, Header, Button, Form } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import ProfileForm from './about/form/ProfileForm';
./about/ProfileForm./about/ProfileForm
const ProfileAboutInfo = () => {
    const [editMode] = useState(true);
    return (
        <Tab.Pane>
            <Grid>
                <Grid.Column width={16} style={{ paddingBottom: 0 }}>
                    <Header floated='left' basic icon='user' content='About User' />
                    <Button
                        floated='right'
                        basic
                        icon={editMode ? 'cancel' : 'edit'}
                        content={editMode ? 'Cancel' : 'Edit Profile'}
                    />
                </Grid.Column>
                <ProfileForm />
            </Grid>
        </Tab.Pane>
    )
}

export default observer(ProfileAboutInfo);
