import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Container, Plan, BtnNew } from "./styles";
import { MdAdd, MdChevronRight } from "react-icons/md";

import api from "../../services/api";

export default function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get("plans");

      console.log(response.data);

      setPlans(response.data);
    }
    loadPlans();
  }, []);

  return (
    <Container>
      <header>
        <h4>Gerenciando planos</h4>
        <div className="buttons">
          <BtnNew to="">
            <MdAdd size={20} color="#fff" />
            <span>Cadastrar</span>
          </BtnNew>
        </div>
      </header>

      {plans.length ? (
        <ul>
          {plans.map(plan => (
            <Plan key={plan.id}>
              <strong>{plan.title}</strong>
              <div>
                <span>{plan.dateFormatted}</span>
                <Link to={`/plans/${plan.id}/details`} onClick={() => {}}>
                  <MdChevronRight size={25} />
                </Link>
              </div>
            </Plan>
          ))}
        </ul>
      ) : (
        <p>Você não cadastrou nenhum Plano.</p>
      )}
    </Container>
  );
}
