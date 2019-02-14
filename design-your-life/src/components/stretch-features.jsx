// Sidebar Feature
import SidebarLeft from '../components/Main/SidebarLeft';

let recentReflection;
let timestamp;

// Recent Reflection Card Logic
if (
  Array.isArray(this.props.reflections) &&
  this.props.reflections.length > 0
) {
  recentReflection = this.props.reflections[this.props.reflections.length - 1]
    .journalEntry;
  timestamp = moment(
    this.props.reflections[this.props.reflections.length - 1].timestamp
  ).format('M/D');
}

<SidebarLeft recentReflection={recentReflection} timestamp={timestamp} />;
