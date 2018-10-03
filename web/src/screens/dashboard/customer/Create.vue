<template>
    <div>
        <b-form>
            <b-form-group label="Name" label-for="input-name">
                <b-form-input id="input-name" placeholder="Name" />
            </b-form-group>
            <b-form-group label="Company Name" label-for="input-name-company">
                <b-form-input id="input-name-company" placeholder="Company Name" />
            </b-form-group>
            <b-form-group label="Phone" label-for="input-phone">
                <b-form-input id="input-phone" type="tel" placeholder="Phone" />
            </b-form-group>
            <b-form-group label="Email" label-for="input-email">
                <b-form-input id="input-email" type="email" placeholder="Email" />
            </b-form-group>
            <b-form-group label="Address" label-for="input-address">
                <b-form-textarea id="input-address" rows="3" placeholder="Address" />
            </b-form-group>
            <b-form-group label="Personal Incharge" label-for="input-personal-incharge">
                <b-form-input id="input-personal-incharge" placeholder="Personal Incharge" />
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
export default {
    
}
</script>
