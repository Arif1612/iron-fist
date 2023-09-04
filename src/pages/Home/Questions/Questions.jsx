import React from "react";

const Questions = () => {
  return (
    <div>
      <div className="collapse collapse-arrow bg-base-200  mb-3">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Which is the best toy car brand?
        </div>
        <div className="collapse-content">
          <ul className="list-disc ml-10">
            <li>Hot Wheels PP Mattel 20-car gift set</li>
            <li>Melissa & Doug Wooden Town Vehicles Set</li>
            <li>Lego Technic Bugatti Bolide</li>
            <li>Liberty Imports RC Drift Car with Remote</li>
          </ul>
        </div>
      </div>
      {/* 2 */}
      <div className="collapse collapse-arrow bg-base-200 mb-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is the expensive toy car brand?
        </div>
        <div className="collapse-content">
          <p>Lamborghini Aventador in gold</p>
        </div>
      </div>
      {/* 3 */}
      <div className="collapse collapse-arrow bg-base-200 mb-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is the fastest toy car?
        </div>
        <div className="collapse-content">
          <p>Traxxas XO-1 – Fastest RC Car In the World</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Is a toy car a model?
        </div>
        <div className="collapse-content">
          <p>
            Because many miniature vehicles were originally aimed at children as
            playthings, there is no precise difference between a model car and a
            toy car, yet the word 'model' implies either assembly required or
            the accurate rendering of an actual vehicle at smaller scale.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is the best selling toy car?
        </div>
        <div className="collapse-content">
          <p>
            It's not just a tall tale – the Little Tikes Cozy Coupe has been
            crowned as the best-selling car model in numerous jurisdictions and
            continues to be one of the most recognisable silhouettes worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
