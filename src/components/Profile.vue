<template>
    <v-container class="profile">
        <v-row>
            <v-col xs12 sm12 offset-md3 md6 offset-lg4 lg4>
                <v-card>
                    <!-- image -->
                    <v-card-row actions img="../~assets/milkyway.png" height="300px">
                        <v-card-text class="white--text pa-0">
                            <v-card-title>
                                <v-spacer></v-spacer>
                                <v-btn icon class="mr-3">
                                    <v-icon>edit</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-card-row height="100%" class="pl-5 pt-5">
                                <div class="display-1 pl-5 pt-5">Ali Conners</div>
                            </v-card-row>
                        </v-card-text>
                    </v-card-row>

                    <!-- info -->
                    <v-list two-line>
                        <v-divider inset></v-divider>
                        <v-list-item>
                            <v-list-tile avatar>
                                <v-list-tile-avatar>
                                    <v-icon class="indigo--text">mail</v-icon>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
                                    <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list-item>
                        <v-list-item>
                            <v-list-tile avatar>
                                <v-list-tile-avatar></v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>One ( 1 )</v-list-tile-title>
                                    <v-list-tile-sub-title>Table Number</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list-item>
                        <v-divider inset></v-divider>
                        <v-list-item>
                            <v-list-tile avatar>
                                <v-list-tile-avatar>
                                    <v-icon class="indigo--text">location_on</v-icon>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>Virginia Tech</v-list-tile-title>
                                    <v-list-tile-sub-title>School</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .profile {
        margin-top: 50px;
    }
</style>

