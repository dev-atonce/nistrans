const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        company_name: { type: String, required: true },
        company_address: { type: String, required: true },
        company_description: { type: String },
        phone: { type: Number },
        telephone: { type: Number },
        facebook: { type: String },
        instagram: { type: String },
        line: { type: String },
        email_1: { type: String },
        email_2: { type: String },
        email_3: { type: String },
        contact_person_1: { type: String },
        contact_person_2: { type: String },
        contact_person_3: { type: String },
        contact_person_telephone_1: { type: Number },
        contact_person_telephone_2: { type: Number },
        contact_person_telephone_3: { type: Number },
    },
    { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
    return {
        id: this._id,
        company_name: this.company_name,
        company_address: this.company_address,
        company_description: this.company_description,
        phone: this.phone,
        telephone: this.telephone,
        facebook: this.facebook,
        instagram: this.instagram,
        line: this.line,
        email_1: this.email_1,
        email_2: this.email_2,
        email_3: this.email_3,
        contact_person_1: this.contact_person_1,
        contact_person_2: this.contact_person_2,
        contact_person_3: this.contact_person_3,
        contact_person_telephone_1: this.contact_person_telephone_1,
        contact_person_telephone_2: this.contact_person_telephone_2,
        contact_person_telephone_3: this.contact_person_telephone_3,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

module.exports = mongoose.model("tb_information", schema);
