import React from 'react';
import PageHeader from '../../components/PageHeader';

function TeacherForm() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader
        title="Que incrível que vocẽ quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Ses dados</legend>

          <div className="input-block">
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name" />
          </div>

          <div className="input-block">
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar" />
          </div>

          <div className="input-block">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input type="text" id="whatsapp" />
          </div>

        </fieldset>
      </main>
    </div>
  )
}

export default TeacherForm;