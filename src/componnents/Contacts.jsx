import React from 'react';

import { contacts } from '../Data';
import { socialIcons } from '../Data';
import { motion } from 'framer-motion';
import axios from 'axios';
import swal from 'sweetalert'
import { useState , useEffect } from "react";
import { Button, Form, Input, Steps, Select, Checkbox, message, Rate } from "antd";





const { Step } = Steps;
const { Option } = Select;

const Contact = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    filiere: '',
    programmingLanguages: [],
    skills: [],
    level: {
      webDevelopment: 1,
      communication: 1,
      databases: 1,
      marketingdigital: 1,
      comptabilité: 1,
      management: 1,
      ai: 1,
    },
    tools: '',
    projectDescription: '',
    hackathon: '',
    hackathonDetails: '',
    interests: [],
    availability: '',
    onlinePreference: '',
    longTermProjects: '',
    hoursPerWeek: '',
    mentor: false,
    mentorDetails: '',
  });

  const [form] = Form.useForm();

  // Gérer les changements des cases à cocher
  const handleCheckboxChange = (name, checkedValues) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: checkedValues,
    }));
  };

  const steps = [
    {
      title: "Informations Générales",
      content: (
        <Form form={form}  layout="vertical" name="generalInfo" initialValues={formData}>
          <Form.Item
            name="name"
            label="Nom et Prénom"
            rules={[{ required: true, message: "Veuillez entrer votre nom." }]}
          >
            <Input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Entrez votre nom complet"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="Adresse Email"
            rules={[{ required: true, message: "Veuillez entrer votre email." }, { type: "email", message: "Veuillez entrer un email valide." }]}
          >
            <Input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Entrez votre adresse email"
            />
          </Form.Item>
          <Form.Item
  name="phoneNumber"
  label="Numéro de Téléphone"
  rules={[
    { required: true, message: "Veuillez entrer votre numéro de téléphone." },
    {
      pattern: /^[0-9]{10}$/, // Regex pour un numéro à 10 chiffres
      message: "Veuillez entrer un numéro de téléphone valide (10 chiffres).",
    },
  ]}
>
  <Input
    value={formData.phoneNumber}
    onChange={(e) =>
      setFormData({ ...formData, phoneNumber: e.target.value })
    }
    placeholder="Entrez votre numéro de téléphone"
  />
</Form.Item>

          <Form.Item
            name="year"
            label="Année d’étude"
            rules={[{ required: true, message: "Sélectionnez votre année." }]}
          >
            <Select
              value={formData.year}
              onChange={(value) =>
                setFormData({ ...formData, year: value })
              }
              placeholder="Sélectionnez votre année d'étude"
            >
              <Option value="année1">1ère année</Option>
              <Option value="deug">2ème année</Option>
              <Option value="licence">3ème année Licence</Option>
              <Option value="master">Master</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="filiere"
            label="Filière"
            rules={[{ required: true, message: "Sélectionnez une filière." }]}
          >
            <Select
              value={formData.filiere}
              onChange={(value) =>
                setFormData({ ...formData, filiere: value })
              }
              placeholder="Sélectionnez votre filière"
            >
              <Option value="Economie">Economie</Option>
              <Option value="Gestion">Gestion</Option>
              <Option value="Droit">Droit</Option>
              <Option value="GRHTN">GRHTN</Option>
              <Option value="Analyse économique">Analyse économique</Option>
              <Option value="Management des médias sociaux">Management des médias sociaux</Option>
            </Select>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: "Compétence Technique",
      content: (
        <Form form={form} layout="vertical" name="technicalSkills" initialValues={formData}>
          <Form.Item
            name="programmingLanguages"
            label="Quels langages de programmation connaisez-vous ?"
            rules={[{ required: true, message: "Veuillez sélectionner au moins un langage." }]}
          >
            <Checkbox.Group value={formData.programmingLanguages} onChange={(checkedValues) => handleCheckboxChange('programmingLanguages', checkedValues)}>
              <Checkbox value="Python">Python</Checkbox>
              <Checkbox value="JavaScript">JavaScript</Checkbox>
              <Checkbox value="Java">Java</Checkbox>
              <Checkbox value="C++">C++</Checkbox>
              <Checkbox value="PHP">PHP</Checkbox>
              <Checkbox value="C">C</Checkbox>
              <Checkbox value="Dart">Dart</Checkbox>
              <Checkbox value="Autre">Autre</Checkbox>
              <Checkbox value="Aucun">Aucun</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            name="skills"
            label="Avez-vous des compétences en :"
            rules={[{ required: true, message: "Veuillez sélectionner au moins une compétence." }]}
          >
            <Checkbox.Group value={formData.skills} onChange={(checkedValues) => handleCheckboxChange('skills', checkedValues)}>
              <Checkbox value="Développement web">Développement web</Checkbox>
              <Checkbox value="Analyse de données">Analyse de données</Checkbox>
              <Checkbox value="Intelligence artificielle">Intelligence artificielle</Checkbox>
              <Checkbox value="Réseaux informatiques">Réseaux informatiques</Checkbox>
              <Checkbox value="Développement mobile">Développement mobile (iOS/Android)</Checkbox>
              <Checkbox value="Ressources Humaines">Ressources Humaines</Checkbox>
              <Checkbox value="Marketing Digital">Marketing Digital</Checkbox>
              <Checkbox value="UX/UI Design">UX/UI Design</Checkbox>
              <Checkbox value="Autre">Autre</Checkbox>
              <Checkbox value="Aucun">Aucun</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            name="level"
            label="Sur une échelle de 1 à 5, évaluez votre niveau dans ces domaines :"
          >
           <div className="container">
  <div className="item">
    <label>Développement web</label>
    <Rate
      value={formData.level.webDevelopment}
      onChange={(value) => setFormData({ ...formData, level: { ...formData.level, webDevelopment: value } })}
    />
  </div>
  <div className="item">
    <label>Bases de données</label>
    <Rate
      value={formData.level.databases}
      onChange={(value) => setFormData({ ...formData, level: { ...formData.level, databases: value } })}
    />
  </div>
  <div className="item">
    <label>Comptabilité</label>
    <Rate
      value={formData.level.comptabilité}
      onChange={(value) => setFormData({ ...formData, level: { ...formData.level, comptabilité: value } })}
    />
  </div>
  <div className="item">
    <label>Communication</label>
    <Rate
      value={formData.level.communication}
      onChange={(value) => setFormData({ ...formData, level: { ...formData.level, communication: value } })}
    />
  </div>
  <div className="item">
    <label>Management</label>
    <Rate
      value={formData.level.management}
      onChange={(value) => setFormData({ ...formData, level: { ...formData.level, management: value } })}
    />
  </div>
  <div className="item">
    <label>Intelligence artificielle</label>
    <Rate
      value={formData.level.ai}
      onChange={(value) => setFormData({ ...formData, level: { ...formData.level, ai: value } })}
    />
  </div>
</div>


          </Form.Item>
          <Form.Item
            name="tools"
            label="Quels outils informatiques utilisez-vous régulièrement ?"
            rules={[{ required: true, message: "Veuillez entrer vos outils." }]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Indiquez les outils informatiques que vous utilisez régulièrement (ex : Excel, Word, PowerPoint, Photoshop, etc.)."
              value={formData.tools}
              onChange={(e) => setFormData({ ...formData, tools: e.target.value })}
            />
          </Form.Item>
        </Form>
      ),
    },
    {
      title: "Expérience Pratique",
      content: (
        <Form form={form} layout="vertical" name="experience" initialValues={formData}>
          <Form.Item
            name="projectDescription"
            label="Avez-vous déjà réalisé des projets en informatique ? Décrivez-en un."
            rules={[{ required: true, message: "Veuillez décrire un projet." }]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Exemple : Un projet d'application web, un chatbot en Python, un projet de machine learning, etc."
              value={formData.projectDescription}
              onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            name="hackathon"
            label="Avez-vous participé à des hackathons ou formations ?"
            rules={[{ required: true, message: "Veuillez répondre à la question." }]}
          >
            <Select
              value={formData.hackathon}
              onChange={(value) => setFormData({ ...formData, hackathon: value })}
              placeholder="Oui / Non"
            >
              <Option value="Oui">Oui</Option>
              <Option value="Non">Non</Option>
            </Select>
          </Form.Item>
          {formData.hackathon === "Oui" && (
            <Form.Item
              name="hackathonDetails"
              label="Si oui, spécifiez l’événement et votre rôle"
            >
              <Input.TextArea
                rows={4}
                placeholder="Détails de l'événement et rôle"
                value={formData.hackathonDetails}
                onChange={(e) => setFormData({ ...formData, hackathonDetails: e.target.value })}
              />
            </Form.Item>
          )}
        </Form>
      ),
    },
    {
      title: "Intérêts et Motivation",
      content: (
        <Form form={form} layout="vertical" name="motivation" initialValues={formData}>
          <Form.Item
            name="interests"
            label="Quels sujets vous intéressent le plus dans l'informatique ?"
            rules={[{ required: true, message: "Veuillez sélectionner au moins un sujet." }]}
          >
            <Checkbox.Group value={formData.interests} onChange={(checkedValues) => handleCheckboxChange('interests', checkedValues)}>
              <Checkbox value="Développement d’applications">Développement d’applications</Checkbox>
              <Checkbox value="Analyse de données">Analyse de données</Checkbox>
              <Checkbox value="Intelligence artificielle">Intelligence artificielle</Checkbox>
              <Checkbox value="Machine learning">Machine learning</Checkbox>
            
               
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            name="clubExpectations"
            label="Qu’attendez-vous du club ?"
            rules={[{ required: true, message: "Veuillez entrer ce que vous attendez du club." }]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Exemple : Développer mes compétences, rencontrer d'autres passionnés, travailler sur des projets collaboratifs, etc."
              value={formData.clubExpectations}
              onChange={(e) => setFormData({ ...formData, clubExpectations: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            name="mentor"
            label="Seriez-vous prêt(e) à encadrer ou former d’autres membres ?"
            rules={[{ required: true, message: "Veuillez répondre à la question." }]}
          >
            <Select
              value={formData.mentor ? "Oui" : "Non"}
              onChange={(value) => setFormData({ ...formData, mentor: value === "Oui" })}
              placeholder="Oui / Non"
            >
              <Option value="Oui">Oui</Option>
              <Option value="Non">Non</Option>
            </Select>
          </Form.Item>
          {formData.mentor && (
            <Form.Item
              name="mentorDetails"
              label="Si oui, précisez votre domaine"
            >
              <Input.TextArea
                rows={4}
                placeholder="Formation en développement web, aide en IA, mentorat en cybersécurité, etc."
                value={formData.mentorDetails}
                onChange={(e) => setFormData({ ...formData, mentorDetails: e.target.value })}
              />
            </Form.Item>
          )}
        </Form>
      ),
    },
    {
      title: "Disponibilité",
      content: (
        <Form form={form} layout="vertical" name="availability" initialValues={formData}>
          <Form.Item
            name="hoursPerWeek"
            label="Combien d’heures par semaine pouvez-vous consacrer au club ?"
            rules={[{ required: true, message: "Veuillez sélectionner un nombre d'heures." }]}
          >
            <Select
              value={formData.hoursPerWeek}
              onChange={(value) => setFormData({ ...formData, hoursPerWeek: value })}
              placeholder="Sélectionnez le nombre d’heures"
            >
              <Option value="1-2">1-2 heures</Option>
              <Option value="3-5">3-5 heures</Option>
              <Option value="plusDe5">Plus de 5 heures</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="onlinePreference"
            label="Préférez-vous participer à des activités en ligne ou en présentiel ?"
            rules={[{ required: true, message: "Veuillez sélectionner une option." }]}
          >
            <Select
              value={formData.onlinePreference}
              onChange={(value) => setFormData({ ...formData, onlinePreference: value })}
              placeholder="Sélectionnez votre préférence"
            >
              <Option value="En ligne">En ligne</Option>
              <Option value="Présentiel">Présentiel</Option>
              <Option value="Les deux">Les deux</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="longTermProjects"
            label="Êtes-vous intéressé par des projets à long terme ?"
            rules={[{ required: true, message: "Veuillez répondre à cette question." }]}
          >
            <Select
              value={formData.longTermProjects}
              onChange={(value) => setFormData({ ...formData, longTermProjects: value })}
              placeholder="Oui / Non"
            >
              <Option value="Oui">Oui</Option>
              <Option value="Non">Non</Option>
            </Select>
          </Form.Item>
          {formData.longTermProjects === "Oui" && (
            <Form.Item
              name="longTermDetails"
              label="Si oui, précisez votre disponibilité."
            >
              <Input.TextArea
                rows={4}
                placeholder="Décrivez votre disponibilité pour des projets à long terme"
                value={formData.longTermDetails}
                onChange={(e) => setFormData({ ...formData, longTermDetails: e.target.value })}
              />
            </Form.Item>
          )}
        </Form>
      ),
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleSubmit = () => {
    axios
      .post("https://sheetdb.io/api/v1/ny80vbh1i8go1", formData)
      .then(response => {
        // Show success message
        message.success("Formulaire soumis avec succès!");
        
        // Refresh the page after showing the success message
        setTimeout(() => {
          window.location.reload();
        }, 1500); // Delay to let the user see the success message
        
      })
      .catch(error => {
        // Show error message
        message.error("Erreur lors de la soumission du formulaire.");
      });
  };
  
    









  

   

  

   
 
  return (
    <div className="container " id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            
            <h2 >Questionnaire</h2>
      </motion.div>
      
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3> Bonjour</h3>
          <p className='contact_text'>Merci de prendre le temps de remplir ce questionnaire. Vos réponses nous aideront à mieux organiser nos activités et à comprendre vos besoins et compétences dans le domaine informatique. Cela ne prendra que 5 à 10 minutes..</p>
          
          <div>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Suivant
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={handleSubmit}>
            Soumettre
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={prev}>
            Précédent
          </Button>
        )}
      </div>
    </div>
         
        </motion.div>
         
        

        
      </div>
     
    </div>
  )
}

export default Contact
