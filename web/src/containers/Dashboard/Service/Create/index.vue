<template>
    <div>
        <b-form>
            <b-form-group label="Customer" label-for="input-customer">
                <b-form-select id="input-customer" placehoder="Customer">
                </b-form-select>
            </b-form-group>

            <b-form-group label="Services" label-for="input-services">
                <b-card v-for="(service, index) in services" :key="index" style="margin-bottom: 10px;">
                    <p class="card-text">
                        <b-row>
                            <b-col>
                                <b-form-group label="Service Type">
                                    <b-form-select v-model="service.type">
                                        <option value="domain">Domain</option>
                                        <option value="hosting">Hosting</option>
                                        <option value="seo">SEO</option>
                                    </b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group label="Person Incharge">
                                    <b-form-select>
                                        <option value="null">Person Incharge</option>
                                    </b-form-select>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-form-group label="Domain URL">
                            <b-form-input placeholder="Domain URL" />
                        </b-form-group>
                    </p>
                    <a href="#" class="card-link" @click.prevent="clickHandleRemoveService(index)">Delete</a>
                </b-card>
                <a href="#" @click.prevent="clickHandleAddService">add service</a>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: [],
        };
    },
    methods: {
        clickHandleAddService(event) {
            this.services.push({
                type: 'domain',
            });
        },
        clickHandleRemoveService(index) {
            this.services.splice(index, 1);
        }
    }
}
</script>
