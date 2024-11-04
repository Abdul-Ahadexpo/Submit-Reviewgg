import PropTypes from "prop-types";
const ClaimBtn = ({ upCoins }) => {
  return (
    <button onClick={() => upCoins(1000)} className="claim-btn">
      Claim Free Credit
    </button>
  );
};

ClaimBtn.propTypes = {
  upCoins: PropTypes.func.isRequired,
};

export default ClaimBtn;
