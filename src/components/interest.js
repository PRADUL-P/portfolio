import { faCameraRetro, faPalette, faPenRuler,faSwatchbook,
     faCode, faPhotoFilm, faCampground, faHandshakeAngle, faGamepad,
      faMusic, faPlane, faBoxArchive } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Interest = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Interests</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <div className="text-center">
        <FontAwesomeIcon icon={faCameraRetro} shake  size="3x" className="text-red-500 mb-2" />
          <p className="font-bold">Photography</p>
        </div>
        <div className="text-center">
        <FontAwesomeIcon icon={faPalette} fade  size="3x" className="text-blue-500 mb-2" />
          <p className="font-bold">Painting</p>
        </div>
        <div className="text-center">
        <FontAwesomeIcon icon={faPenRuler} flip  size="3x" className="text-yellow-500 mb-2" />
          <p className="font-bold">Designing</p>
        </div>
        <div className="text-center">
        <FontAwesomeIcon icon={faSwatchbook} beat  size="3x" className="text-green-500 mb-2" />
          <p className="font-bold">Art</p>
        </div>
        <div className="text-center">
        <FontAwesomeIcon icon={faCode} bounce size="3x" className="text-purple-500 mb-2" />
          <p className="font-bold">Coding</p>
        </div>
        <div className="text-center">
        <FontAwesomeIcon icon={faPhotoFilm} beatFade size="3x" className="text-red-500 mb-2" />
          <p className="font-bold">Photo and video editing</p>
        </div>
        <div className="text-center">
        <FontAwesomeIcon icon={faCampground} fade  size="3x" className="text-blue-500 mb-2" />
          <p className="font-bold">Camping</p>
        </div>
        <div className="text-center">
        <FontAwesomeIcon icon={faHandshakeAngle} shake  size="3x" className="text-yellow-500 mb-2" />
          <p className="font-bold">Volunteering</p>
        </div>
        <div className="text-center">
        <FontAwesomeIcon icon={faGamepad} beatFade  size="3x" className="text-green-500 mb-2" />
          <p className="font-bold">Gaming</p>
        </div>
        <div className="text-center">
        <FontAwesomeIcon icon={faMusic} shake size="3x" className="text-purple-500 mb-2" />
          <p className="font-bold">Music</p>
        </div>
        <div className="text-center">
        <FontAwesomeIcon icon={faPlane} spinPulse  size="3x" className="text-red-500 mb-2" />
          <p className="font-bold">Traveling</p>
        </div>
        <div className="text-center">
        <FontAwesomeIcon icon={faBoxArchive} bounce  size="3x" className="text-blue-500 mb-2" />
          <p className="font-bold">Collecting</p>
        </div>
      </div>
    </div>
  );
};

export default Interest;
